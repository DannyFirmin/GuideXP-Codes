from django.urls import path
from .views import home_view,create_view

urlpatterns = [
    path('',home_view),
    path('create/', create_view),

]
