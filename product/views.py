from django.shortcuts import render, get_object_or_404, redirect
from product.forms.product_form import ProductCreateForm
from product.models import Product


def index(request):
    context = {'products': Product.objects.all().order_by('name') }
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
            return redirect('product')
    else:
        form = ProductCreateForm()
    return render(request, 'product/create_product.html', {
        'form': form
    })