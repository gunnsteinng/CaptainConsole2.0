from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="checkout_index"),
    path('confirmation', views.confirmation, name='checkout_confirmation')
]