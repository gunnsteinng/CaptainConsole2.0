from django.http import JsonResponse
from django.shortcuts import render
from product.models import Product

def index(request):
    return render(request, 'cart/index.html')

def get_cart_items_by_id(request):
    product_ids = request.GET["product"]
    products = [{
        'id': x.id,
        'name': x.name,
        'price': x.price,
        'description': x.description,
        'price': x.price,
        'firstImage': x.productimage_set.first().image
    } for x in Product.objects.filter(id__in=product_ids.split('-'))]
    return JsonResponse({'products': products})
