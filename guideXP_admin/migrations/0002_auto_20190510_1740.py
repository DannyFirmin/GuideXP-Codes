# Generated by Django 2.1.7 on 2019-05-10 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guideXP_admin', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exhibition',
            old_name='Gallery_authorised_by',
            new_name='gallery_authorised_by',
        ),
        migrations.RenameField(
            model_name='exhibition',
            old_name='Gallery_uploaded_by',
            new_name='gallery_uploaded_by',
        ),
        migrations.RenameField(
            model_name='gallery',
            old_name='Gallery_authorised_by',
            new_name='gallery_authorised_by',
        ),
        migrations.RenameField(
            model_name='gallery',
            old_name='Gallery_uploaded_by',
            new_name='gallery_uploaded_by',
        ),
    ]
