# Generated by Django 5.0 on 2023-12-29 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz_app', '0006_alter_popular_course_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
