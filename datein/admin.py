from django.contrib import admin
from .models import Dataset
from django import forms
from django.core.validators import FileExtensionValidator
import pandas as pd
# Register your models here.


class DatasetForm(forms.ModelForm):
    gender_field = forms.CharField(required=False)
    city_field = forms.CharField(required=False)
    csv_file = forms.FileField(required=True, validators=[FileExtensionValidator(allowed_extensions=['csv'])])


    def clean_csv_file(self):
        csv_file = self.cleaned_data['csv_file']
        gender_field = self.cleaned_data.get('gender_field', '')
        city_field = self.cleaned_data.get('city_field', '')
        csv = pd.read_csv(csv_file)
       # import ipdb; ipdb.set_trace();
        if gender_field != '':

            csv[gender_field].describe()
        if city_field != '':
            csv[city_field].describe()

    class Meta:
        model = Dataset
        fields = '__all__'



class DatasetAdmin(admin.ModelAdmin):
    form = DatasetForm


admin.site.register(Dataset, DatasetAdmin)