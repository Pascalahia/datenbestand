from django.db import models
from django.forms import forms
import csv


# Create your models here.
class Dataset(models.Model):
    file_name = models.CharField(max_length=255)
    information = models.TextField()

    # class CsvUplode(forms.Form):
    # file_names = forms.CharField(max_length=255)
    # informations = forms.TextField()
    # csv_file = forms.FileField()

    # data_file= models.FileField(upload_to=upload_csv_file, validators=[csv_file_validator])

    def __str__(self):
        return self.file_name


"""
class element(models.Model):
    Dataset = models.ForeignKey(Dataset)
    Invoice = models.CharField(max_length=10)
    ID = models.CharField(max_length=5)
    Branch = models.CharField(max_length=10)
    City = models.CharField(max_length=10)
    Customer = models.CharField(max_length=10)
    type = models.CharField(max_length=10)
    Gender = models.CharField(max_length=10)
    Product = models.CharField(max_length=10)
    line = models.CharField(max_length=10)
    Unit = models.CharField(max_length=10)
    price = models.CharField(max_length=10)
    Quantity = models.IntegerField()
    Tax = models.CharField(max_length=10)
    Total = models.CharField(max_length=10)
    Date = models.IntegerField()
    Time = models.IntegerField()
    Payment = models.IntegerField()
    cogs = models.IntegerField()
    gross = models.IntegerField()
    margin = models.CharField(max_length=10)
    percentage = models.CharField(max_length=4)
    gross = models.IntegerField()
    income = mmodels.IntegerField()
    Rating = models.CharField(max_length=10)

    def __str__(self):
        return self.file_name
        """

# https://stackoverflow.com/questions/38150971/can-i-bulk-upload-a-csv-to-django-with-many-to-one-relationship-mapping
