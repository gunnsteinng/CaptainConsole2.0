from django.shortcuts import render
from product.models import Product


def index(request):
    context = {'products': Product.objects.all().order_by('name') }
    return render(request, 'product/products.html', context)