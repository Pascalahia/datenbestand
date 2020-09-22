from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Dataset


def index(request):
    template = loader.get_template('datein/index.html')
    context = dict()
    return HttpResponse(template.render(context, request))

    # return HttpResponse("Hello, this my first views for the statistic")
# Create your views here.
