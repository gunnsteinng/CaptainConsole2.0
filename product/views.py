from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from product.forms.product_form import ProductCreateForm, ProductUpdateForm
from product.models import Product, ProductImage


def index(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        products = [ {
            'id': x.id,
            'name': x.name,
            'description': x.description,
            'firstImage': x.productimage_set.first().image
        } for x in Product.objects.filter(name__icontains=search_filter)]
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