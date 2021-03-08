from django.http import JsonResponse, HttpResponse
from django.apps import apps

from shopify_app.models import Shop

import jwt
import re
import urllib
import shopify

# TODO: Extract into shopify_app app
# TODO: Extract into a utils file

HTTP_AUTHORIZATION_HEADER= 'HTTP_AUTHORIZATION'
PREFIX = 'Bearer '

HOSTNAME_PATTERN = r'[a-z0-9][a-z0-9-]*[a-z0-9]'
SHOP_DOMAIN_RE = re.compile(fr'^https://{HOSTNAME_PATTERN}\.myshopify\.com/$')

def extract_session_token(request):
    header = request.META.get(HTTP_AUTHORIZATION_HEADER)

    if not header.startswith(PREFIX):
        raise ValueError('Invalid token')

    return header[len(PREFIX):]

def decode_session_token(session_token):
    return jwt.decode(
        session_token,
        apps.get_app_config("shopify_app").SHOPIFY_API_SECRET,
        audience=apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
        algorithms=['HS256'],
        options={'require': ['iss', 'dest', 'sub', 'jti', 'sid']}
    )

def validate_issuer_hostname(decoded_payload):
    issuer_root = urllib.parse.urljoin(decoded_payload['iss'], '/')

    if not SHOP_DOMAIN_RE.match(issuer_root):
        raise ValueError('Invalid token')

def validate_issuer_and_dest_match(decoded_payload):
    issuer_root = urllib.parse.urljoin(decoded_payload['iss'], '/')
    dest_root = urllib.parse.urljoin(decoded_payload['dest'], '/')

    if issuer_root != dest_root:
        raise ValueError('Invalid token')

def validate_issuer(decoded_payload):
    validate_issuer_hostname(decoded_payload)
    validate_issuer_and_dest_match(decoded_payload)

def get_session_token(request):
    raw_session_token = extract_session_token(request)
    decoded_payload = decode_session_token(raw_session_token)
    validate_issuer(decoded_payload)

    return decoded_payload

def with_session_token(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        try:
            session_token = get_session_token(request)
            with shopify_session(session_token):
                return func(*args, **kwargs)
        except ValueError as e:
            return HttpResponse(status=401)

    return wrapper

def shopify_session(session_token):
    shopify_domain = session_token.get("dest").removeprefix("https://")
    api_version = apps.get_app_config("shopify_app").SHOPIFY_API_VERSION
    access_token = Shop.objects.get(shopify_domain = shopify_domain).shopify_token

    return shopify.Session.temp(shopify_domain, api_version, access_token)

@with_session_token
def products(request):
    products = shopify.Product.find()

    return JsonResponse({'products': [p.to_dict() for p in products]})

@with_session_token
def orders(request):
    orders = shopify.Order.find(status='any')

    return JsonResponse({'orders': [o.to_dict() for o in orders]})
