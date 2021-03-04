from django.apps import AppConfig
import os


class ShopifyAppConfig(AppConfig):
    name = 'shopify_app'

    SHOPIFY_API_KEY = os.getenv('SHOPIFY_API_KEY')
    SHOPIFY_API_SECRET = os.getenv('SHOPIFY_API_SECRET')
    APP_URL = os.getenv('APP_URL')
    SHOPIFY_API_VERSION = os.getenv('SHOPIFY_API_VERSION', 'unstable')
    SHOPIFY_API_SCOPES = os.getenv('SHOPIFY_API_SCOPES', 'write_products,write_orders')
