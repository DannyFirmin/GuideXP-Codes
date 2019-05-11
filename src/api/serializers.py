from rest_framework import serializers
from guideXP_admin.models import *

class Artserializer(serializers.ModelSerializer):
    class Meta:
        model  = Artimage
        fields = "__all__"



