from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Guidexpuser


@receiver(post_save,sender=User)
def create_guidexpuser(sender,instance, created, **kwargs):
    if instance.is_superuser:
        if created:
            Guidexpuser.objects.create(user=instance, user_type='1')


@receiver(post_save,sender=User)
def save_guidexpuser(sender,instance, **kwargs):
    if instance.is_superuser:
        instance.guidexpuser.save()