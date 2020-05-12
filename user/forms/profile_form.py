from django.forms import ModelForm, widgets
from user.models import Profile
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        exclude = [ 'id', 'user' ]
        widgets = {
            'first_name': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'last_name': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'email': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'image': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'phone': widgets.NumberInput(attrs={ 'class': 'form-control'}),
            'address_1': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'address_2': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'city': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'zip': widgets.TextInput(attrs={'class': 'form-control'}),
            'country': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'state': widgets.TextInput(attrs={ 'class': 'form-control'}),
        }

class ProfileUpdateForm(ModelForm):
    class Meta:
        model = Profile
        exclude = [ 'id', 'user' ]
        widgets = {
            'first_name': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'last_name': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'email': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'image': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'phone': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'address_1': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'address_2': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'city': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'zip': widgets.TextInput(attrs={'class': 'form-control'}),
            'country': widgets.TextInput(attrs={ 'class': 'form-control'}),
            'state': widgets.TextInput(attrs={ 'class': 'form-control'}),
        }

class ProfileCreateForm(ModelForm):
    class Meta:
        model = Profile
        exclude = [ 'id' ]
        widgets = {
            'first_name': widgets.TextInput(attrs={ 'class': 'form-control' }),
            'last_name': widgets.TextInput(attrs={'class': 'form-control'}),
            'email': widgets.TextInput(attrs={'class': 'form-control'}),
            'is_staff': widgets.CheckboxInput(attrs={'class': 'form-control'}),
            'is_superuser': widgets.CheckboxInput(attrs={'class': 'form-control'}),
        }


