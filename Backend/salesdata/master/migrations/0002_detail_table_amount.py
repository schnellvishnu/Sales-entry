# Generated by Django 5.1.2 on 2024-10-31 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='detail_table',
            name='amount',
            field=models.IntegerField(null=True),
        ),
    ]
