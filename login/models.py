from django.db import models

# Create your models here.


class User(models.Model):
    # user_catagory=(
    #     ('1','superuser'),
    #     ('2', 'admin'),
    #     ('3', 'uploader')
    # )
    # user_catagory = models.CharField(max_length=1,choices=user_catagory,default=None)
    name = models.CharField(max_length=128, unique=True,)
    password = models.CharField(max_length=256)
    # email = models.EmailField(default=None)
    # date = models.DateField(default=None)


# class Arts(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.CharField(max_length=5000)
#     pic_path = models.ImageField(upload_to='images/')

class IMG(models.Model):
    # uploder = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    # approve = (
    #     ('1','approved'),
    #     ('0','not approved')
    # )
    # approve_type = models.CharField(max_length=1,choices=approve,default=0)
    title = models.CharField(max_length=100,default="")
    content = models.CharField(max_length=5000,default="")
    img = models.FileField(upload_to='images')
    name = models.CharField(max_length=20)
    uploader= models.CharField(max_length=255,default="")

#
# class Gallery(models.Model):
#     name= models.CharField(max_length=100)
#     locations =models.CharField(max_length=100)
#
#
# class Exhibition(models.Model):
#     exhibition_name = models.CharField(max_length=100)
#     gallery= models.ForeignKey(Gallery,on_delete=models.CASCADE)
#     start_date = models.DateTimeField(default= None)
#     end_date = models.DateTimeField(default= None)





