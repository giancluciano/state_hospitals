from django.urls import path

from . import views

urlpatterns = [
    path('', views.HospitalsView.as_view(), name='index'),
    path('hospitals/<str:state>/', views.HospitalViewSet.as_view({'get': 'list'}))
]