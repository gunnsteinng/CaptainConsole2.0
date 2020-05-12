from django.urls import path
from . import views

urlpatterns = [
    path('', views.profile, name='profile'),
    path('edit_profile/', views.edit_profile, name='edit_profile'),
    path('create_staff/', views.create_staff, name='create_staff'),
    path('delete_staff/', views.delete_staff, name='delete_staff')
]