from django.http import JsonResponse

def products(request):
    return JsonResponse({'id': 1, 'name': 'test-product'})

def orders(request):
    return JsonResponse({'id': 1, 'name': 'test-order'})
