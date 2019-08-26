from django.shortcuts import render
from .models import Description

# Create your views here.
def home_view(request):
    return render(request, 'gxpadmin/base.html', {})


def create_view(request):

    if request.method == "POST":
        pass

    return render(request, 'gxpadmin/create.html', {})



def view_view(request):
    return render(request,'gxpadmin/view.html',{})


def search(request):
    key = request.Get.get("keywords")
    post_list =Description.objects.get(model_name='B')

    return  None