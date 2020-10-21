from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import *
import json


def index(request):
    data = Dataset.objects.all().values('id', 'name')
    context = dict(data=data)
    return render(request, 'datein/index.html', context)


def detail(request, pk=None):
    data_object = Dataset.objects.filter(id=pk).values().first()
    for key, val in data_object.items():
        try:
            data_object[key] = json.loads(val)
        except Exception:
            continue
    context = dict(data_object=data_object)
    return render(request, "datein/detail.html", context)


def get_data(request, pk=None):
    data_object = Dataset.objects.filter(id=pk).values().first()
    for key, val in data_object.items():
        try:
            data_object[key] = json.loads(val)
        except Exception:
            continue
    return JsonResponse(data=dict(information=data_object))

#  return HttpResponse("Hello, this my first views for the statistic")
# Create your views here.
