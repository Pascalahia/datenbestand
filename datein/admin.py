from django.contrib import admin
from .models import Dataset
from django import forms
from django.core.validators import FileExtensionValidator
import pandas as pd
import json


# Register your models here.


class DatasetForm(forms.ModelForm):
    gender_field = forms.CharField(required=False)
    city_field = forms.CharField(required=False)
    age_field = forms.CharField(required=False)
    income_field = forms.CharField(required=False)
   # data_field = forms.CharField(required=False)
    csv_file = forms.FileField(required=True, validators=[FileExtensionValidator(allowed_extensions=['csv'])])
    information = forms.Textarea()
    columns_name = forms.Textarea()


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


     #   if data_field != '':
      #      self.cleaned_data['data_len'] = json.dumps(dict(csv=len(csv)))

        if gender_field != '':
            self.cleaned_data['gender_covered'] = json.dumps(dict(genders=csv[gender_field].unique().tolist()))
            # csv[gender_field].describe()
        if city_field != '':
            self.cleaned_data['cities_covered'] = json.dumps(dict(cities=(csv[city_field].value_counts().to_json())))
            #self.cleaned_data['cities_covered'] = json.dumps(dict(cities=csv[city_field].unique().tolist()))
        if age_field != '':
            self.cleaned_data['age_covered'] = json.dumps(dict(ages=(csv[age_field].describe().to_json())))
            # csv[age_field].decribe()
        if income_field != '':
            self.cleaned_data['income_covered'] = json.dumps(dict(incomes=csv[income_field].unique().tolist()))

            # csv[income_field].describe()
                                                              
    class Meta:
        model = Dataset
        fields = ('file_name', 'information', 'cities_covered', 'age_covered', 'income_covered', 'gender_covered', )


class DatasetAdmin(admin.ModelAdmin):
    form = DatasetForm


admin.site.register(Dataset, DatasetAdmin)
