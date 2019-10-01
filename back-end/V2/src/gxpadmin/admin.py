from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Language)
admin.site.register(Gallery)
admin.site.register(Exhibition)
admin.site.register(Exhibit)
admin.site.register(Author)
admin.site.register(AuthorToExhibit)
admin.site.register(Description)
admin.site.register(Files)