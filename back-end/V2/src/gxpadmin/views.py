from django.shortcuts import render

from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Exhibit, Exhibition, Description, Language
from .serializer import LanguageSerializer, DescriptionSerializer

# Create your views here.

@csrf_exempt
def get_all_language_view(request):
    if request.method == 'GET':
        languages  = Language.objects.all()
        serializer = LanguageSerializer(languages, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        raise Http404("Please only use GET method")

@csrf_exempt
def get_all_gallery_view(request, lang_code):
    if request.method == 'GET':
        language = Language.objects.get(code = lang_code)
        query = Description.objects.filter(language = language, model_name = 'D')
        serializer = DescriptionSerializer(query,many=True)
        return JsonResponse(serializer.data,safe=False)
    else:
        raise Http404("Please only use GET method")

@csrf_exempt
def get_all_exhibition_from_gallery_view(request, lang_code, gallery_id):
    if request.method == 'GET':
        language = Language.objects.get(code = lang_code)
        exhibition_ids = Exhibition.objects.filter(gallery_id = gallery_id).values_list('id', flat=True)
        query = Description.objects.filter(model_id__in = exhibition_ids, language = language, model_name = 'C')
        serializer = DescriptionSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        raise Http404("Please only use GET method")


@csrf_exempt
def get_all_exhibit_from_exhibition_gallery(request, lang_code, gallery_id, exhibition_id):
    if request.method == 'GET':
        language = Language.objects.get(code = lang_code)


    else:
        raise Http404("Please only use GET method")

@csrf_exempt
def get_exhibit_from_exhibition_gallery(request, lang_code, gallery_id, ehxibition_id, exhibit_id):
    pass


@csrf_exempt
def search_all(request, lang_code, search_item):
    pass



@csrf_exempt
def search_exhibition_from_gallery_view(request, lang_code, search_item):
    pass


@csrf_exempt
def search_exhibiti_from_exhibition_gallery_view(request, lang_code, search_item):
    pass



