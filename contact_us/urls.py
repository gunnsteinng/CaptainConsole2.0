from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="contact_us_index"),
    path('confirmation', views.confimation, name='confirmation'),
]