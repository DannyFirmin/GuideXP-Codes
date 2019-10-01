from django.urls import path
from .views import get_all_language_view, get_all_gallery_view, get_all_exhibition_from_gallery_view, \
                   get_all_exhibit_from_exhibition_gallery, get_exhibit_from_exhibition_gallery, \
                   search_all, search_exhibition_from_gallery_view, search_exhibiti_from_exhibition_gallery_view

urlpatterns = [
    path('api/get/all_language', get_all_language_view),
    path('api/get/<slug:lang_code>/all_gallery', get_all_gallery_view),
    path('api/get/<slug:lang_code>/<slug:gallery_id>/all_exhibition', get_all_exhibition_from_gallery_view),
    path('api/get/<slug:lang_code>/<slug:gallery_id>/<slug:exhibition_id>/all_exhibit', get_all_exhibit_from_exhibition_gallery),
    path('api/get/<slug:lang_code>/<slug:gallery_id>/<slug:exhibition_id>/<slug:exhibit_id>', get_exhibit_from_exhibition_gallery),
    path('api/search/<slug:lang_code>/<slug:search_item>', search_all),
    path('api/search_exhibition/<slug:lang_code>/<slug:gallery_id>/<slug:search_item>', search_exhibition_from_gallery_view),
    path('api/search_exhibit/<slug:lang_code>/<slug:gallery_id>/<slug:exhibition_id>/<slug:search_item>', search_exhibiti_from_exhibition_gallery_view),
]

