from django.db import models
from django.contrib.auth.models import User
User._meta.get_field('email').blank = False

class Guidexpuser(models.Model):
    USER_TYPES = (('1', 'Superuser'),('2', 'Admin'),('3', 'Worker'))
    user_type  = models.CharField(max_length=1, choices=USER_TYPES)
    # django has built in User table that we could use, which includes common fields such as
    # username,password, email.
    user       = models.OneToOneField(User, on_delete=models.CASCADE)

# class Gallery(models.Model):
#     gallery_name          = models.CharField(max_length=50)
#     gallery_address       = models.CharField(max_length=95)
#     gallery_city          = models.CharField(max_length=20)
#     gallery_state         = models.CharField(max_length=3)
#     gallery_zip           = models.CharField(max_length=4)
#     gallery_uploaded_by   = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='upload_gallery')
#     gallery_authorised_by = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='authorise_gallery', null=True, blank=True)

class Artist(models.Model):
    artist_img           = models.ImageField(upload_to="artist_images/")
    artist_name          = models.CharField(max_length=70)
    artist_description   = models.TextField()
    artist_uploaded_by   = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='upload_artist')
    artist_authorised_by = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='authorise_artist', null=True, blank=True)

class Exhibition(models.Model):
    exhibition_name           = models.CharField(max_length=50)
    #exhibition_description    = models.TextField()
    #exhibition_start          = models.DateField()
    #exhibition_end            = models.DateField()
    #exhibition_gallery        = models.ForeignKey(Gallery, models.CASCADE)
    exhibition_uploaded_by    = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='upload_exhibition')
    exhibition_authorised_by  = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='authorise_exhibition', null=True,blank=True)

class Artimage(models.Model):
    art_name          = models.CharField(max_length=255)
    art_description   = models.TextField()
    art_img           = models.ImageField(upload_to="art_images/")
    art_audio         = models.FileField(upload_to="art_audios/")
    #art_in_gallery    = models.ForeignKey(Gallery, models.CASCADE, blank=True, null=True)
    art_in_exhibition = models.ForeignKey(Exhibition, models.CASCADE, blank=True, null=True)
    art_from_artist   = models.ForeignKey(Artist, models.CASCADE, blank=True, null=True)
    art_uploaded_by   = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='upload_art')
    art_authorised_by = models.ForeignKey(Guidexpuser, models.CASCADE, related_name='authorise_art', null=True, blank=True)




