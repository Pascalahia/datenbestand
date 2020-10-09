from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Dataset
from .admin import DatasetForm
import csv


def index(request):
    template = loader.get_template('datein/index.html')
    context = dict()
    return HttpResponse(template.render(context, request))


#def get_data(request):
  #  data_queryset = DatasetForm.objects.order_by('-id')
   # context = {'data_queryset': data_queryset}
    #return render(request, 'datein/index.html', context)


  #  return HttpResponse("Hello, this my first views for the statistic")
# Create your views here.
