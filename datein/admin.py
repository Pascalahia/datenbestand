from django.contrib import admin
from .models import Dataset
from django import forms
from django.core.validators import FileExtensionValidator
import pandas as pd
import json
import numpy as np
import csv as csv_module


# Register your models here.


class DatasetForm(forms.ModelForm):
    name = forms.CharField(required=True, label="Name for the dataset")
    gender_field = forms.CharField(required=False, help_text="Name of column if it is there.")
    geography_field = forms.CharField(required=False, help_text="Name of column if it is there.")
    age_field = forms.CharField(required=False, help_text="Name of column if it is there.")
    is_age_categorical = forms.BooleanField(required=False)
    income_field = forms.CharField(required=False)
    is_income_categorical = forms.BooleanField(required=False)
    density_field = forms.CharField(required=False, label="Temporal Density",help_text="Name of column if it is there.")
    csv_file = forms.FileField(required=True, validators=[FileExtensionValidator(allowed_extensions=['csv'])])
    information = forms.CharField(widget=forms.HiddenInput(), required=False)
    file_name = forms.CharField(widget=forms.HiddenInput(), required=False)

    def clean_csv_file(self):
        csv_file = self.cleaned_data.pop('csv_file')
        self.cleaned_data['file_name'] = csv_file.name
        gender_field = self.cleaned_data.pop('gender_field', '')
        geography_field = self.cleaned_data.pop('geography_field', '')
        age_field = self.cleaned_data.pop('age_field', '')
        is_age_categorical = self.cleaned_data.pop('is_age_categorical', False)
        is_income_categorical = self.cleaned_data.pop('is_income_categorical', False)
        income_field = self.cleaned_data.pop('income_field', '')
        density_field = self.cleaned_data.pop('density_field', '')
        is_density_categorical = self.cleaned_data.pop('is_density_categorical', False)
        delimiter = csv_module.Sniffer().sniff(csv_file.readline().decode('utf-8')).delimiter
        csv_file.seek(0)
        csv = pd.read_csv(csv_file, sep=delimiter)
        information = csv.describe().to_dict()
        information['is_null'] = csv.isnull().sum().to_dict()

        if gender_field != '':
            value_counts = csv[gender_field].value_counts()
            gender_information = value_counts.to_dict()
            information['gender_information'] = dict(information=gender_information)

        if age_field != '':
            if is_age_categorical:
                age_categorical = csv[age_field]
            else:
                labels = ["0-18", "18-30", "30-45", "45-60", "60+"]
                cut_edges = [0, 18, 30, 45, 60, 2000]
                age_categorical = pd.cut(csv[age_field], bins=cut_edges, labels=labels)
            value_counts = age_categorical.value_counts()
            age_information = value_counts.to_dict()
            information["age_information"] = dict(information=age_information)

        if income_field != '':
            if is_income_categorical:
                income_categorical = csv[income_field]
            else:
                income = csv[income_field]
                cut_edges = list(np.linspace(0, income.max(), 7))
                income_categorical = pd.cut(income, bins=cut_edges)
            value_counts = income_categorical.value_counts()
            income_information = json.loads(value_counts.to_json())
            information["income_information"] = dict(information=income_information)

        if geography_field != '':
            value_counts = csv[geography_field].value_counts()
            geography_information = value_counts.to_dict()
            information['geography_information'] = dict(information=geography_information)

        if density_field != '':
                if  is_density_categorical:
                    density_categorical = csv[density_field]
                else:
                    density = csv[density_field]
                    cut_edges = list(np.linspace(0, density.max(), 7))
                    density_categorical = pd.cut(density, bins=cut_edges)
                value_counts = density_categorical.value_counts()
                density_information = json.loads(value_counts.to_json())
                information["density_information"] = dict(information=density_information)


            #value_counts = csv[density_field].value_counts()
            #density_information = value_counts.to_dict()
            #information['density_information'] = dict(information=density_information)

        self.cleaned_data['information'] = json.dumps(information)

    class Meta:
        model = Dataset
        exclude = ()


class DatasetAdmin(admin.ModelAdmin):
    form = DatasetForm


admin.site.register(Dataset, DatasetAdmin)


def metric(data):
    ddict = data.value_counts().to_dict()
    vsum = sum(ddict.values())
    res = sum([((d / vsum) ** 2) * (len(ddict.keys())) for d in ddict.values()])
    return res


"""
 name = forms.CharField(required=True, label="Name for the dataset")
 gender_field = forms.CharField(required=False, help_text="Name of column if it is there.")
 geography_field = forms.CharField(required=False, help_text="Name of column if it is there.")
 age_field = forms.CharField(required=False, help_text="Name of column if it is there.")
 is_age_categorical = forms.BooleanField(required=False)
 income_field = forms.CharField(required=False)
 is_income_categorical = forms.BooleanField(required=False)
 csv_file = forms.FileField(required=True, validators=[FileExtensionValidator(allowed_extensions=['csv'])])
 information = forms.CharField(widget=forms.HiddenInput(), required=False)
 file_name = forms.CharField(widget=forms.HiddenInput(), required=False)
 """

"""
    def clean_csv_file(self):
        csv_file = self.cleaned_data.pop('csv_file')
        gender_field = self.cleaned_data.pop('gender_field', '')
        city_field = self.cleaned_data.pop('city_field', '')
        age_field = self.cleaned_data.pop('age_field', '')
        income_field = self.cleaned_data.pop('income_field', '')
    #   data_field = self.cleaned_data.pop('data_field', '')
        csv = pd.read_csv(csv_file)
        # import ipdb; ipdb.set_trace()
        information = json.loads(csv.describe().to_json())
        information['is_null'] = json.loads(csv.isnull().sum().to_json())
        self.cleaned_data['information'] = json.dumps(information)

       # import ipdb;
        #ipdb.set_trace()

        if gender_field != '':
            self.cleaned_data['gender_covered'] = json.dumps(dict(genders=csv[gender_field].value_counts().to_json()))
            # csv[gender_field].describe()
        if city_field != '':
            self.cleaned_data['cities_covered'] = json.dumps(dict(cities=(csv[city_field].value_counts().to_json())))
            #self.cleaned_data['cities_covered'] = json.dumps(dict(cities=csv[city_field].unique().tolist()))
        if age_field != '':
          #  self.cleaned_data['age_covered'] = json.dumps(dict(ages=(csv[age_field].inique().to_json())))
            self.cleaned_data['age_covered'] = json.dumps(dict(ages=(csv[age_field].value_counts().to_json())))
        if income_field != '':
            self.cleaned_data['income_covered'] = json.dumps(dict(incomes=csv[income_field].value_counts().to_json()))

            # csv[income_field].describe()
            
     class Meta:
        model = Dataset
        fields = ('file_name', 'information', 'cities_covered', 'age_covered', 'income_covered', 'gender_covered', )

"""
"""
#       gender_field = forms.CharField(required=False)
#   city_field = forms.CharField(required=False)
#   age_field = forms.CharField(required=False)
#   income_field = forms.CharField(required=False)
#   # data_field = forms.CharField(required=False)
#     csv_file = forms.FileField(required=True, validators=[FileExtensionValidator(allowed_extensions=['csv'])])
#     information = forms.Textarea()
#    columns_name = forms.Textarea()
"""
