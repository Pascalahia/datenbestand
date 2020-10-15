from django.urls import path
from . import views
from django.urls import re_path

urlpatterns = [
    re_path('data', views.get_data, name='get_data'),
    re_path('', views.index, name='index'),

]
