from django.shortcuts import render
from user.models import Profile
from django_countries import countries

# Create your views here.
def index(request):
    context = {'countries': list(countries)}
    if request.user.is_authenticated:
        profile = Profile.objects.filter(user=request.user).first()
        context.update({'profile': profile })
    return render(request, 'checkout/index.html', context)

def confirmation(request):
    return render(request, 'checkout/confirmation.html')

