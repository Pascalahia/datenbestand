from django.db import models
import csv

# Create your models here.
class Dataset(models.Model):
    file_name = models.CharField(max_length=255)
    information = models.TextField(default='summary')
    #data_len = models.TextField(default='csv_length')
    cities_covered = models.TextField(default='cities')
    age_covered = models.TextField(default='age')
    income_covered = models.TextField(default='income')
    gender_covered = models.TextField(default='gender')
    #x_covered = models.TextField(null=True)


    def __str__(self):
        return self.file_name

