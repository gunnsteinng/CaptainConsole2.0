from django.shortcuts import render
from user.models import Profile
from django_countries import countries

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        profile = Profile.objects.filter(user=request.user).first()
        context = {'profile': profile, 'countries': list(countries)}
        return render(request, 'checkout/index.html', context)
    return render(request, 'checkout/index.html')

