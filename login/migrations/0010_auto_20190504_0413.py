# Generated by Django 2.1.7 on 2019-05-04 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0009_auto_20190504_0232'),
    ]

    operations = [
        migrations.AddField(
            model_name='img',
            name='content',
            field=models.CharField(default='', max_length=5000),
        ),
        migrations.AddField(
            model_name='img',
            name='title',
            field=models.CharField(default='', max_length=100),
        ),
    ]
