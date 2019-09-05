from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Exhibit, Exhibition, Description, Language
from .serializer import LanguageSerializer, DescriptionSerializer


def home_view(request):
    return render(request, 'gxpadmin/base.html', {})

def create_view(request):
    if request.method == "POST":
        pass
    return render(request, 'gxpadmin/create.html', {})

@csrf_exempt
def language_list_view(request):
    """
    List all language
    """
    if request.method == 'GET':
        languages = Language.objects.all()
        serializer = LanguageSerializer(languages, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def exhibition_list_view(request,lan):
    """
        List all exhibitions of given language
        """
    if request.method == 'GET':
        language = Language.objects.get(name = lan)
        query = Description.objects.filter(language = language, model_name = 'C')
        serializer = DescriptionSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def exhibit_list_view(request, lan, exhibition_id):
    if request.method == 'GET':
        id_list = Exhibit.objects.filter(exhibition_id = exhibition_id).values_list('id', flat=True)
        language = Language.objects.get(name=lan)
        query = Description.objects.filter(model_id__in = id_list, language = language, model_name = 'B')
        serializer = DescriptionSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_exhibit_view(request, lan, exhibit_id):
    if request.method == 'GET':
        language = Language.objects.get(name=lan)
        query = Description.objects.filter(model_id= exhibit_id, language = language, model_name = 'B')
        serializer = DescriptionSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)

