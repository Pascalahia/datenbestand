from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import *
from .admin import DatasetForm
import json


def index(request):
    #data = Dataset.objects.all()
    data = Dataset.objects.first()
    context = {'information': json.loads(data.information), 'data': data}
    #context = {'data': data}
    return render(request, 'datein/index.html', context)


def get_data(request):
    #infos= list(Dataset.objects.all().value())
    information = list(Dataset.objects.all().values('information'))
    return JsonResponse(data=dict(information=information))
    #return JsonResponse(data=dict(infos=infos))


#  return HttpResponse("Hello, this my first views for the statistic")
# Create your views here.
