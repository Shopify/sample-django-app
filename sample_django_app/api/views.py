from django.http import JsonResponse
from shopify_app.decorators import session_token_required

import shopify


@session_token_required
def products(request):
    products = shopify.Product.find()

    return JsonResponse({'products': [p.to_dict() for p in products]})

@session_token_required
def orders(request):
    orders = shopify.Order.find(status='any')

    return JsonResponse({'orders': [o.to_dict() for o in orders]})
