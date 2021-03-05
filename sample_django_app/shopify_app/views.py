from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.apps import apps
from .models import Shop

import hmac as hmac_utils
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


class LoginView(View):
    def get(self, request, *args, **kwargs):
        if request.GET.get("shop"):
            return authenticate(request)
        return render(request, "shopify_app/login.html", {'app_name': 'Sample Django app'})

    def post(self, request):
        return authenticate(request)


def callback(request):
    params = request.GET.dict()
    shop = params.get("shop")

    try:
        validate_state_param(request, params.get("state"))
        validate_hmac_param(params)
        access_token = exchange_code_for_access_token(request, shop)
        store_access_token_and_shop_record(access_token, shop)
    except ValueError as exception:
        messages.error(request, str(exception))
        return redirect(reverse("login"))

    redirect_uri = build_callback_redirect_uri(request, params)
    return redirect(redirect_uri)

# Login helper methods


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


def get_sanitized_shop_param(request):
    shop = get_shop_param(request)
    validate_shop_param(shop)
    return shop


def get_shop_param(request):
    shop = request.GET.get("shop", request.POST.get("shop")).strip()
    if not shop:
        raise ValueError("Shop parameter is required")
    return shop


def validate_shop_param(shop):
    if not SHOP_DOMAIN_RE.match(shop):
        raise ValueError("Shop must match 'example.myshopify.com'")


def build_auth_params(request):
    scopes = get_configured_scopes()
    redirect_uri = build_redirect_uri()
    state = build_state_param()

    return scopes, redirect_uri, state


def get_configured_scopes():
    return apps.get_app_config("shopify_app").SHOPIFY_API_SCOPES.split(",")


def build_redirect_uri():
    app_url = apps.get_app_config("shopify_app").APP_URL
    callback_path = reverse("callback")
    return "https://{app_url}{callback_path}".format(app_url=app_url, callback_path=callback_path)


def build_state_param():
    return binascii.b2a_hex(os.urandom(15)).decode("utf-8")


def store_state_param(request, state):
    request.session["shopify_oauth_state_param"] = state


def _new_session(shop_url):
    shopify_api_version = apps.get_app_config(
        "shopify_app").SHOPIFY_API_VERSION
    shopify_api_key = apps.get_app_config("shopify_app").SHOPIFY_API_KEY
    shopify_api_secret = apps.get_app_config("shopify_app").SHOPIFY_API_SECRET

    shopify.Session.setup(api_key=shopify_api_key, secret=shopify_api_secret)
    return shopify.Session(shop_url, shopify_api_version)


# Callback helper methods


def validate_state_param(request, state):
    if request.session.get("shopify_oauth_state_param") != state:
        raise ValueError('Anti-forgery state parameter does not match')

    request.session.pop("shopify_oauth_state_param", None)


def validate_hmac_param(params):
    hmac = params.pop("hmac")
    reconstructed_hmac = build_hmac(params)

    if not hmac_utils.compare_digest(reconstructed_hmac.hexdigest(), hmac):
        raise ValueError("Anti-forgery hmac parameter does not match")


def build_hmac(params):
    api_secret = apps.get_app_config("shopify_app").SHOPIFY_API_SECRET
    _params = "&".join(["%s=%s" % (k, v) for k, v in sorted(params.items())])

    return hmac_utils.new(api_secret.encode("utf-8"), _params.encode("utf-8"), hashlib.sha256)


def exchange_code_for_access_token(request, shop):
    session = _new_session(shop)
    return session.request_token(request.GET)


def store_access_token_and_shop_record(access_token, shop):
    shop_record = Shop.objects.get_or_create(shopify_domain=shop)[0]
    shop_record.shopify_token = access_token

    # TODO: store access scopes

    shop_record.save()


def build_callback_redirect_uri(request, params):
    base = request.session.get("return_to", reverse("root_path"))
    return "{base}?shop={shop}".format(base=base, shop=params.get("shop"))
