from django.urls import path
from .views import getArtByExhibition

urlpatterns = [
    path('/exhibition/<str:pk>/', getArtByExhibition),
]