# Generated by Django 2.1.7 on 2019-05-04 00:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0004_arts'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='arts',
            name='pic_path',
        ),
    ]
