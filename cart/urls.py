from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="cart_index"),
    path('cart_item_detail', views.get_cart_items_by_id, name="cart_item_detail")
]