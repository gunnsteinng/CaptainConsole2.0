from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="contact_us_index"),
]