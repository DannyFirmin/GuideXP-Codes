from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import (UserUpdate,UserprofileUpdate,UploadArtForm,UploadArtist,createUserForm,createGuideXPUserForm,UploadExhibition)
from .models import Guidexpuser,Artist, Exhibition

# def login(request):
#     form = UserCreationForm()
#     return render(request, "guideXP_admin/login.html", {'form':form})

@login_required
def home(request):
    return render(request, "guideXP_admin/base.html", {})

@login_required
def profile(request):
    u_form = UserUpdate
    p_form = UserprofileUpdate
    context = {
        'u_form': u_form,
        'p_form': p_form,
    }
    return render(request, "guideXP_admin/profile.html", context)

@login_required
def createArt(request):
    if request.method == 'POST':
        pass



    art_form          = UploadArtForm()
    artistForm        = UploadArtist()
    exhibitionForm    = UploadExhibition()
    artists           = Artist.objects.filter(artist_uploaded_by = request.user.guidexpuser)
    exhibitions       = Exhibition.objects.filter(exhibition_uploaded_by = request.user.guidexpuser)
    context_variables = {'form':art_form, 'form1':artistForm, 'form2':exhibitionForm, 'artists':artists, 'exhibitions':exhibitions}
    return render(request,"guideXP_admin/create_art.html", context_variables)





@login_required
def createArtist(request):
    artist_form = UploadArtist
    return render(request,"guideXP_admin/create_artist.html", {'form':artist_form})

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