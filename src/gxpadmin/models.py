from django.db import models

# Create your models here.

MODEL_NAME = [('A', 'Author'), ('B', 'Exhibit'), ('C', 'Exhibition'), ('D', 'Gallery')]

class Language(models.Model):
    id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=255)

class Gallery(models.Model):
    id = models.AutoField(primary_key=True)

class Exhibition(models.Model):
    id = models.AutoField(primary_key=True)
    exhibition_number = models.IntegerField()
    gallery_id = models.ForeignKey(Gallery, on_delete=models.SET_NULL, null=True, blank=True)

class Exhibit(models.Model):
    id = models.AutoField(primary_key=True)
    exhibit_number = models.IntegerField()
    exhibition_id = models.ForeignKey(Exhibition, on_delete=models.SET_NULL, null=True,blank=True)


class Author(models.Model):
    id = models.AutoField(primary_key=True)

class AuthorToExhibit(models.Model):
    id = models.AutoField(primary_key=True)
    author_id = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True)
    exhibit_id = models.ForeignKey(Exhibit, on_delete=models.SET_NULL, null=True)

class Description(models.Model):
    id = models.AutoField(primary_key=True)
    model_id = models.IntegerField()
    language = models.ForeignKey(Language, on_delete=models.SET_NULL, null=True)
    model_name = models.CharField(max_length=1, choices=MODEL_NAME)
    jsonString = models.TextField()
