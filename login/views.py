from django.shortcuts import render,redirect
from . import forms,models
from .models import IMG
# from .forms import art_form
from django.http import HttpResponse
# Create your views here.


def index(request):
    pass
    return render(request, 'index.html')


def login(request):
    request.session['is_login'] = False
    message = ""
    if request.method == 'POST':
        login_form = forms.login_form(request.POST)
        message = "please check input "
        if login_form.is_valid():
            username = login_form.cleaned_data['Username']
            password = login_form.cleaned_data['Password']
            # print(username)
            # print(password)
            try:
                user = models.User.objects.get(name=username)
                print(user.password)
                if user.password == password:
                    request.session['is_login'] = True
                    request.session['user_name'] = username

                    return redirect('/upload/')
                else:
                    message = 'sorry wrong password！'
                    return render(request, 'login.html', locals())
            except:
                message = 'user not exists！'
                return render(request, 'login.html', locals())

    login_form = forms.login_form
    return render(request, 'login.html',locals())


def register(request):
    if request.method =='POST':
        register_form = forms.register_form(request.POST)
        if register_form.is_valid():
            username = register_form.cleaned_data['Username']
            password = register_form.cleaned_data['Password']
            password_confirm = register_form.cleaned_data["Password_confirm"]
            # email = register_form.cleaned_data[""]

            if username and password and password_confirm and (password_confirm == password):
                new_user = models.User.objects.create(name=username,password=password)
                new_user.save()
                return redirect('/login')
    register_form = forms.register_form
    return render(request,'register.html',locals())


def logout(request):
    request.session.flush()
    request.session['is_login'] = False
    return redirect("/login/")

def upload(request):
    # form = art_form(request.FILES)
    if (request.session['is_login'] == False):
        return redirect("/login")

    if request.method == 'GET':
        return render(request, 'upload.html',locals())

    if request.method == 'POST':
        new_img = IMG(
            img=request.FILES.get('img'),
            name=request.FILES.get('img').name,
            title=request.POST['title'],
            content=request.POST['content'],
            uploader=request.session['user_name'],
        )
        new_img.save()
    return render(request, 'upload.html')


    # if request.method == 'POST':
    #     # form = Arts(pic_url=request.FILES['picture'])
    #     # print("****")
    #     # form = art_form(request.POST)
    #     # pic = request.FILES.get("pics")
    #     new_img = IMG(
    #                 img=request.FILES.get('img'),
    #                 name=request.FILES.get('img').name
    #             )
    #     new_img.save()
    #
    #
    #     # title = form.cleaned_data["title"]
    #     # content = form.cleaned_data["content"]
    #     # pics = form.cleaned_data["pics"]
    #     #
    #     # new_arts = models.Arts.objects.create(title=title,content=content,pic_path=pics)
    #     # new_arts.save()
    #     # form.save()
    #     print("upload success")
    #     return render(request, 'upload.html',locals())
    #
    # new_arts = forms.art_form
    # return render(request, 'upload.html',locals())
