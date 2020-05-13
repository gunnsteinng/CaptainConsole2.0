from django.contrib.auth.forms import UserCreationForm
from user.models import User
from django.shortcuts import render, redirect, get_object_or_404
from user.forms.profile_form import ProfileForm, ProfileUpdateForm
from user.forms2 import CreateStaffForm
from user.models import Profile

def profile(request):
    profile = Profile.objects.filter(user=request.user).first()
    if request.method == 'POST':
        form = ProfileForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    return render(request, 'user/profile.html', {
        'form': ProfileForm(instance=profile)
    })

def edit_profile(request):
    profile = Profile.objects.filter(user=request.user).first()
    if request.method == 'POST':
        form = ProfileUpdateForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    return render(request, 'user/edit_profile.html', {
        'form': ProfileUpdateForm(instance=profile)
    })

def create_staff(request):
    if request.method == 'POST':
        form = CreateStaffForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('profile')
    return render(request, 'user/create_staff.html', {
        'form': CreateStaffForm()
    })