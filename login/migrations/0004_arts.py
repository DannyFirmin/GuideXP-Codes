# Generated by Django 2.1.7 on 2019-05-03 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_auto_20190502_0229'),
    ]

    operations = [
        migrations.CreateModel(
            name='Arts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=5000)),
                ('pic_path', models.ImageField(max_length=255, upload_to='images/')),
            ],
        ),
    ]
