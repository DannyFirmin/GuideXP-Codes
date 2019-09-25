from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

'''set the url path to the different options'''
urlpatterns = [
    path('', auth_views.LoginView.as_view(template_name='guideXP_admin/login.html',redirect_authenticated_user=True), name='admin-login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='guideXP_admin/logout.html'), name='admin-logout'),
    path('home/',views.home, name='admin-home'),
    path('setting/profile/',views.profile, name='admin-profile'),
    path('setting/account', views.createAccount, name='admin-create-account'),
    path('upload/art/', views.createArt, name='admin-upload-art'),
    path('upload/artist/', views.createArtist, name='admin-upload-artist'),
]


