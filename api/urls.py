from django.urls import path
from .views import getArtByExhibition, getExhibition

urlpatterns = [
    path('/exhibition/<str:pk>/', getArtByExhibition),
    path('/exhibition/', getExhibition),
]