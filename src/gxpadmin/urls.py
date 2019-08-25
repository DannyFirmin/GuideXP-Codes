from django.urls import path
from .views import home_view,create_view,view_view

urlpatterns = [
    path('',home_view),
    path('create/', create_view),
    path('view/', view_view),

]
