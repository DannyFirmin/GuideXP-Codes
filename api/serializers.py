from rest_framework import serializers
from guideXP_admin.models import *

class Artserializer(serializers.ModelSerializer):
    class Meta:
        model  = Artimage
        fields = "__all__"


class ExhibitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibition
        fields = "__all__"

