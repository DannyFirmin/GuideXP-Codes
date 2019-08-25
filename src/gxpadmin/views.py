from django.shortcuts import render

# Create your views here.
def home_view(request):
    return render(request, 'gxpadmin/base.html', {})


def create_view(request):

    if request.method == "POST":
        pass

    return render(request, 'gxpadmin/create.html', {})
