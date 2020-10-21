from django.db import models
import csv


# Create your models here.
class Dataset(models.Model):
    name = models.TextField(null=False)
    file_name = models.CharField(max_length=255)
    information = models.TextField(null=False)

    def __str__(self):
        return self.name
