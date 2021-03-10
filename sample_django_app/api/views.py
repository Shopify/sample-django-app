from django.http import JsonResponse
from shopify_app.decorators import with_session_token

import shopify


@with_session_token
def products(request):
    products = shopify.Product.find()

    return JsonResponse({'products': [p.to_dict() for p in products]})

@with_session_token
def orders(request):
    orders = shopify.Order.find(status='any')

    return JsonResponse({'orders': [o.to_dict() for o in orders]})
