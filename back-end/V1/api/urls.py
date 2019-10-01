from django.urls import path
from .views import getArtByExhibition, getExhibition
'the urls setting for api so the request can send to some specific urls'
urlpatterns = [
    path('/exhibition/<str:pk>/', getArtByExhibition),
    path('/exhibition/', getExhibition),
]