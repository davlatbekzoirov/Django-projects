# Generated by Django 5.0.1 on 2024-01-17 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product_mini',
            name='budget',
            field=models.IntegerField(default=0, verbose_name='Budget'),
        ),
        migrations.AlterField(
            model_name='product_mini',
            name='price',
            field=models.CharField(choices=[('USD', 'DOLLARS'), ('UZS', 'SO`M')], default='USD', max_length=10, verbose_name='KURS'),
        ),
    ]