# Generated by Django 2.1.7 on 2019-05-10 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guideXP_admin', '0002_auto_20190510_1740'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exhibition',
            old_name='gallery_authorised_by',
            new_name='exhibition_authorised_by',
        ),
        migrations.RenameField(
            model_name='exhibition',
            old_name='gallery_uploaded_by',
            new_name='exhibition_uploaded_by',
        ),
    ]
