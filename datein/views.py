from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, this my first views for the statistic")
# Create your views here.
