from django.apps import apps
from django.http import HttpResponse
from shopify import Session
from shopify.utils import SessionTokenUtility
from shopify_app.models import Shop


HTTP_AUTHORIZATION_HEADER= 'HTTP_AUTHORIZATION'

def with_session_token(func):
    def wrapper(*args, **kwargs):
        try:
            session_token = SessionTokenUtility.get_decoded_session_token(
                authorization_header = authorization_header(args[0]),
                api_key = apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
                secret = apps.get_app_config("shopify_app").SHOPIFY_API_SECRET
            )
            with shopify_session(session_token):
                return func(*args, **kwargs)
        except ValueError: # TODO: Accept custom errors from library
            return HttpResponse(status=401)

    return wrapper

def shopify_session(session_token):
    shopify_domain = session_token.get("dest").removeprefix("https://")
    api_version = apps.get_app_config("shopify_app").SHOPIFY_API_VERSION
    access_token = Shop.objects.get(shopify_domain = shopify_domain).shopify_token

    return Session.temp(shopify_domain, api_version, access_token)

def authorization_header(request):
    return request.META.get(HTTP_AUTHORIZATION_HEADER)