# Generated by Django 5.1.2 on 2024-11-01 04:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0004_item_master'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detail_table',
            name='amount',
        ),
    ]
