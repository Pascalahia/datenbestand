from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('data/<int:pk>/', views.get_data, name='get_data'),
    path('detail/<int:pk>', views.detail, name='detail'),
]
