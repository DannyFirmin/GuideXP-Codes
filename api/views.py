from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .serializers import Artserializer, ExhibitionSerializer
from guideXP_admin.models import Artimage, Exhibition
from django.http import HttpResponse, JsonResponse


'''Set request and response functions'''
@csrf_exempt
def getArtByExhibition(request, pk):

    # try:
    #     exhibition = Exhibition.objects.get(exhibition_name=pk)
    #     arts = Artimage.objects.all()
    # except Artimage.DoesNotExist:
    #     return HttpResponse(status=404)

    if request.method == 'GET':
        exhibition = Exhibition.objects.get(exhibition_name=pk)
        arts = Artimage.objects.filter(art_in_exhibition=exhibition)
        serializer = Artserializer(arts,many=True)
        return  JsonResponse(serializer.data, safe=False)

@csrf_exempt
def getExhibition(request):
    if request.method == 'GET':
        exhibitons = Exhibition.objects.all()
        serializer = ExhibitionSerializer(exhibitons, many=True)
        return JsonResponse(serializer.data, safe=False)
