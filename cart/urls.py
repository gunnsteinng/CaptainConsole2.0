from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="cart_index"),
]