from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import *

class UploadArtForm(forms.ModelForm):
    class Meta:
        model = Artimage
        exclude = ['art_uploaded_by','art_authorised_by', 'art_in_gallery', 'art_in_exhibition', 'art_from_artist']

class UploadArtist(forms.ModelForm):
    class Meta:
        model = Artist
        exclude = ['artist_uploaded_by','artist_authorised_by']


class UserUpdate(forms.ModelForm):
    class Meta:
        model  = User
        fields = ['username','email']


class UserprofileUpdate(forms.ModelForm):
    class Meta:
        model   = Guidexpuser
        exclude = ['user_type','user']


class createUserForm(UserCreationForm):
    email = forms.EmailField()
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2',]

class createGuideXPUserForm(forms.ModelForm):
    class Meta:
        model   = Guidexpuser
        exclude = ['user']