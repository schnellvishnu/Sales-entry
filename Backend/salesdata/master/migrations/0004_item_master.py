# Generated by Django 5.1.2 on 2024-10-31 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0003_alter_detail_table_item_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item_Master',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('var_no', models.IntegerField(null=True)),
                ('detail_data', models.JSONField(blank=True, null=True)),
            ],
        ),
    ]
