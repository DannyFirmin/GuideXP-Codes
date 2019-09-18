from django.urls import path
from .views import home_view,create_view, language_list_view, exhibition_list_view, exhibit_list_view, get_exhibit_view,search_result

urlpatterns = [
    path('',home_view),
    path('create/', create_view),
    path('api/language_list', language_list_view),
    path('api/<slug:lan>/exhibition_list', exhibition_list_view),
    path('api/<slug:lan>/<slug:exhibition_id>/exhibit_list', exhibit_list_view),
    path('api/<slug:lan>/exhibit/<slug:exhibit_id>', get_exhibit_view),
    path('api/<slug:lan>/search', search_result),

]
