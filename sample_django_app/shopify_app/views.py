from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.apps import apps
from .models import Shop

import hmac
import base64
import hashlib
import binascii
import os
import shopify
import re

from .models import Shop

HOSTNAME_PATTERN = r'[a-z0-9][a-z0-9-]*[a-z0-9]'
# Does not include https://
SHOP_DOMAIN_RE = re.compile(fr'^{HOSTNAME_PATTERN}\.myshopify\.com$')


def _new_session(shop_url):
    shopify_api_version = apps.get_app_config(
        "shopify_app").SHOPIFY_API_VERSION
    shopify_api_key = apps.get_app_config("shopify_app").SHOPIFY_API_KEY
    shopify_api_secret = apps.get_app_config("shopify_app").SHOPIFY_API_SECRET

    shopify.Session.setup(api_key=shopify_api_key, secret=shopify_api_secret)
    return shopify.Session(shop_url, shopify_api_version)




def store_state_param(request, state):
    request.session["shopify_oauth_state_param"] = state


def build_state_param():
    return binascii.b2a_hex(os.urandom(15)).decode("utf-8")


def build_redirect_uri():
    app_url = apps.get_app_config("shopify_app").APP_URL
    callback_path = reverse("callback")
    return "https://{app_url}{callback_path}".format(app_url=app_url, callback_path=callback_path)


def get_configured_scopes():
    return apps.get_app_config("shopify_app").SHOPIFY_API_SCOPES.split(",")


def build_auth_params(request):
    scopes = get_configured_scopes()
    redirect_uri = build_redirect_uri()
    state = build_state_param()

    return scopes, redirect_uri, state


def validate_shop_param(shop):
    if not SHOP_DOMAIN_RE.match(shop):
        raise ValueError("Shop must match 'example.myshopify.com'")


def get_shop_param(request):
    shop = request.GET.get("shop", request.POST.get("shop")).strip()
    if not shop:
        raise ValueError("Shop parameter is required")
    return shop


def get_sanitized_shop_param(request):
    shop = get_shop_param(request)
    validate_shop_param(shop)
    return shop


def authenticate(request):
    try:
        shop = get_sanitized_shop_param(request)
        scopes, redirect_uri, state = build_auth_params(request)
        store_state_param(request, state)
        permission_url = _new_session(shop).create_permission_url(
            scopes, redirect_uri, state
        )
        return redirect(permission_url)
    except ValueError as exception:
        messages.error(request, str(exception))
        return redirect(reverse("login"))


class LoginView(View):
    def get(self, request, *args, **kwargs):
        if request.GET.get("shop"):
            return authenticate(request)
        return render(request, "shopify_app/login.html", {'app_name': 'Sample Django app'})

    def post(self, request):
        return authenticate(request)


def callback(request):
    params = request.GET.dict()

    if not is_valid_state(request, params["state"]):
        messages.error(
            request, "Anti-forgery state token does not match the initial request."
        )
        return redirect(reverse("login"))
    else:
        request.session.pop("shopify_oauth_state_param", None)

    if not is_hmac_valid(params):
        messages.error(request, "Could not verify a secure login")
        return redirect(reverse("login"))

    try:
        shop_url = params["shop"]
        session = _new_session(shop_url)
        shop_record = Shop.objects.get_or_create(shopify_domain=shop_url)[0]
        shop_record.shopify_token = session.request_token(request.GET)
        # TODO: store access scopes
        shop_record.save()
    except Exception as e:
        messages.error(request, "Could not log in to Shopify store.")
        return redirect(reverse("login"))

    messages.info(request, "Logged in to shopify store.")
    request.session.pop("return_to", None)
    shop_query_param = "?shop={shop_domain}".format(shop_domain=shop_url)
    return redirect(
        request.session.get("return_to", reverse(
            "root_path")) + shop_query_param
    )

def is_valid_state(request, state):
    return request.session["shopify_oauth_state_param"] == state


def is_hmac_valid(params):
    api_secret = apps.get_app_config("shopify_app").SHOPIFY_API_SECRET
    myhmac = params.pop("hmac")
    line = "&".join(["%s=%s" % (key, value)
                     for key, value in sorted(params.items())])

    h = hmac.new(api_secret.encode("utf-8"),
                 line.encode("utf-8"), hashlib.sha256)
    return hmac.compare_digest(h.hexdigest(), myhmac)