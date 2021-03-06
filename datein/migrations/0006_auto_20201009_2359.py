# Generated by Django 3.1.1 on 2020-10-09 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datein', '0005_remove_dataset_columns_covered'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dataset',
            name='age_covered',
            field=models.TextField(default='age'),
        ),
        migrations.AlterField(
            model_name='dataset',
            name='cities_covered',
            field=models.TextField(default='cities'),
        ),
        migrations.AlterField(
            model_name='dataset',
            name='gender_covered',
            field=models.TextField(default='gender'),
        ),
        migrations.AlterField(
            model_name='dataset',
            name='income_covered',
            field=models.TextField(default='income'),
        ),
    ]
