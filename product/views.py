from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from product.forms.product_form import ProductCreateForm, ProductUpdateForm
from product.models import Product, ProductImage, ProductCategory
from django.db.models import Q


def index(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        products = [ {
            'id': x.id,
            'name': x.name,
            'price': x.price,
            'category': x.category.name,
            'manufacturer': x.manufacturer.name,
            'description': x.description,
            'firstImage': x.productimage_set.first().image
        } for x in Product.objects.filter(Q(name__icontains=search_filter) | Q(category__name__icontains=search_filter) | Q(manufacturer__name__icontains=search_filter))]
        return JsonResponse({'data': products})

    if 'order_by' in request.GET:
        order_by = request.GET['order_by']
        products = [ {
            'id': x.id,
            'name': x.name,
            'price': x.price,
            'category': x.category.name,
            'manufacturer': x.manufacturer.name,
            'description': x.description,
            'firstImage': x.productimage_set.first().image
        } for x in Product.objects.all().order_by(order_by)]
        return JsonResponse({'data': products})

    if 'special_offer' in request.GET:
        special_offer = request.GET['special_offer']
        products = [ {
            'id': x.id,
            'name': x.name,
            'price': x.price,
            'category': x.category.name,
            'manufacturer': x.manufacturer.name,
            'on_sale': x.on_sale,
            'description': x.description,
            'firstImage': x.productimage_set.first().image
        } for x in Product.objects.filter(on_sale__exact=special_offer)]
        return JsonResponse({'data': products})

    context = {'products': Product.objects.all().order_by('name')}
    return render(request, 'product/products.html', context)

def get_product_by_id(request, id):
    return render(request, 'product/product_info.html', {
        'product': get_object_or_404(Product, pk=id)
    })

def create_product(request):
    if request.method == 'POST':
        form = ProductCreateForm(data=request.POST)
        if form.is_valid():
            product = form.save()
            product_image = ProductImage(image=request.POST['image'], product=product)
            product_image.save()
            return redirect('product_index')
    else:
        form = ProductCreateForm()
    return render(request, 'product/create_product.html', {
        'form': form
    })

def delete_product(request, id):
    product = get_object_or_404(Product, pk=id)
    product.delete()
    return redirect('product_index')

def update_product(request, id):
    instance = get_object_or_404(Product, pk=id)
    if request.method == 'POST':
        form = ProductUpdateForm(data=request.POST, instance=instance)
        if form.is_valid():
            form.save()
            return redirect('product_detail', id=id)
    else:
        form = ProductUpdateForm(instance=instance)
    return render(request, 'product/update_product.html', {
        'form': form,
        'id': id
    })