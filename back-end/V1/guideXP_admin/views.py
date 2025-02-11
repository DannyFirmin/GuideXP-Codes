'''import modle for '''
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import (UserUpdate,UserprofileUpdate,UploadArtForm,UploadArtist,createUserForm,createGuideXPUserForm,UploadExhibition)
from .models import Guidexpuser,Artist, Exhibition, Artimage

# def login(request):
#     form = UserCreationForm()
#     return render(request, "guideXP_admin/login.html", {'form':form})
'''This is the the home page '''
@login_required
def home(request):
    return render(request, "guideXP_admin/base.html", {})


'''The forms for the website can be built by dlango automatically, so we just import the libraries that inside 
the Django'''
@login_required
def profile(request):
    u_form = UserUpdate
    p_form = UserprofileUpdate
    context = {
        # user form and user profile form
        'u_form': u_form,
        'p_form': p_form,
    }
    return render(request, "guideXP_admin/profile.html", context)


'''Creators can create arts after they login'''
@login_required
def createArt(request):
    if request.method == 'POST':
        form               = UploadArtForm(request.POST , request.FILES)
        form1              = UploadArtist(request.POST, request.FILES)
        artist_name        = request.POST.get('artist_name')
        artist_description = request.POST.get('artist_description')
        artist_img         = request.POST.get('artist_img')
        exhibition_name    = request.POST.get('exhibition_name')
        artist             = None
        exhibition         = None
        # check artist name or exhibition name is digit
        if artist_name.isdigit():
            artist = Artist.objects.get(pk=int(artist_name))
        if exhibition_name.isdigit():
            exhibition = Exhibition.objects.get(pk=int(exhibition_name))

        # check form is valid,if the form is  suitable filled,then save it
        if form.is_valid():
            cleaned_data = form.cleaned_data;
            if artist is None:
                if form1.is_valid():
                    cleaned_data_1 = form1.cleaned_data;
                    artist = Artist.objects.create(artist_name=cleaned_data_1.get('artist_name'), artist_img=cleaned_data_1.get('artist_img'),
                                                   artist_description=cleaned_data_1.get('artist_description'), artist_uploaded_by=request.user.guidexpuser)
                    artist.save()
            if exhibition is None:
                exhibition = Exhibition.objects.create(exhibition_name=exhibition_name, exhibition_uploaded_by=request.user.guidexpuser)
                exhibition.save()

            a = Artimage.objects.create(art_name=cleaned_data.get('art_name'), art_description=cleaned_data.get('art_description'),
                                                 art_img = cleaned_data.get('art_img'),art_audio=cleaned_data.get('art_audio'),
                                                 art_in_exhibition = exhibition, art_from_artist = artist, art_uploaded_by = request.user.guidexpuser
                                                 )
            a.save()
            messages.success(request,f'Art has been created!')
            return redirect('admin-upload-art')


    art_form          = UploadArtForm()
    artistForm        = UploadArtist()
    exhibitionForm    = UploadExhibition()
    artists           = Artist.objects.filter(artist_uploaded_by = request.user.guidexpuser)
    exhibitions       = Exhibition.objects.filter(exhibition_uploaded_by = request.user.guidexpuser)
    context_variables = {'form':art_form, 'form1':artistForm, 'form2':exhibitionForm, 'artists':artists, 'exhibitions':exhibitions}
    return render(request,"guideXP_admin/create_art.html", context_variables)


'''Create new Artists'''
@login_required
def createArtist(request):
    artist_form = UploadArtist
    return render(request,"guideXP_admin/create_artist.html", {'form':artist_form})


'''Create login function for admin'''
@login_required
def createAccount(request):
    if request.method == 'POST':
        form1 = createUserForm(request.POST)
        form2 = createGuideXPUserForm(request.POST)
        if form1.is_valid() and form2.is_valid():
            u = User.objects.create_user(username=form1.cleaned_data.get('username'),password=form1.cleaned_data.get('password1'),email=form1.cleaned_data.get('email'))
            u.save()
            guidexpUser = Guidexpuser(user = u,user_type=form2.cleaned_data.get('user_type'))
            guidexpUser.save()
            username = form1.cleaned_data.get('username')
            messages.success(request,f'Account for {username} has been created!')
            return redirect('admin-create-account')
    else:
        userForm        = createUserForm()
        guidexpUserform = createGuideXPUserForm()
    return render(request,"guideXP_admin/create_account.html", {'form1':userForm,'form2':guidexpUserform,})