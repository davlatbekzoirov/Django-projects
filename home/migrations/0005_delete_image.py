# Generated by Django 4.2.7 on 2023-11-26 11:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_remove_image_link'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
    ]
