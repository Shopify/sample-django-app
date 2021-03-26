from django.apps import apps
from django.http import HttpResponse
from django.urls import reverse
from django.shortcuts import redirect
from shopify import Session, session_token
from shopify_app.models import Shop
from shopify_app.views import get_sanitized_shop_param


HTTP_AUTHORIZATION_HEADER = "HTTP_AUTHORIZATION"


def session_token_required(func):
    def wrapper(*args, **kwargs):
        try:
            decoded_session_token = session_token.decode_from_header(
                authorization_header=authorization_header(args[0]),
                api_key=apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
                secret=apps.get_app_config("shopify_app").SHOPIFY_API_SECRET,
            )
            with shopify_session(decoded_session_token):
                return func(*args, **kwargs)
        except session_token.SessionTokenError:
            return HttpResponse(status=401)

    return wrapper


def shopify_session(session_token):
    shopify_domain = session_token.get("dest").removeprefix("https://")
    api_version = apps.get_app_config("shopify_app").SHOPIFY_API_VERSION
    access_token = Shop.objects.get(shopify_domain=shopify_domain).shopify_token

    return Session.temp(shopify_domain, api_version, access_token)


def authorization_header(request):
    return request.META.get(HTTP_AUTHORIZATION_HEADER)


def known_shop_required(func):
    def wrapper(*args, **kwargs):
        request = args[1]
        try:
            check_shop_domain(request, kwargs)
            check_shop_known(request, kwargs)

            return func(*args, **kwargs)
        except:
            return redirect(reverse("login"))

    return wrapper


def check_shop_domain(request, kwargs):
    kwargs["shopify_domain"] = get_sanitized_shop_param(request)


def check_shop_known(request, kwargs):
    kwargs["shop"] = Shop.objects.get(shopify_domain=kwargs.get("shopify_domain"))
