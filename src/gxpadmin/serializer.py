from rest_framework import serializers
from .models import *

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name']

class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = ['id','jsonString']




