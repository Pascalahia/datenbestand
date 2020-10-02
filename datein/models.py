from django.db import models
from django.forms import forms
import csv


# Create your models here.
class Dataset(models.Model):
    file_name = models.CharField(max_length=255)
    information = models.TextField()

    def __str__(self):
        return self.file_name

