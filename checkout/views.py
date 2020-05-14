from django.shortcuts import render
from user.models import Profile
from user.models import User

# Create your views here.
def index(request):
    profile = Profile.objects.filter(user=request.user).first()
    context = {'products': profile}
    return render(request, 'checkout/index.html', context)

