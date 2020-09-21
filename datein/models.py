from django.db import models
import csv

# Create your models here.
class Dataset(models.Model):
    file_name = models.CharField(max_length=255)
    information = models.TextField()
    #data_file= models.FileField(upload_to=upload_csv_file, validators=[csv_file_validator])

    def __str__(self):
        return self.file_name