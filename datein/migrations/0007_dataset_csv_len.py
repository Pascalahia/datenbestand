# Generated by Django 3.1.1 on 2020-10-12 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datein', '0006_auto_20201009_2359'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataset',
            name='csv_len',
            field=models.TextField(default='csv_length'),
        ),
    ]
