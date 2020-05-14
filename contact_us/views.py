from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'contact_us/index.html')

def confimation(request):
    return render(request, 'contact_us/confirmation.html')