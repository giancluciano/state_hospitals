from django.urls import path

from . import views

urlpatterns = [
    path('', views.HospitalsView.as_view(), name='index'),
]