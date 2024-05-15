from django.urls import path
from . import views

urlpatterns = [
  path('data', views.popDataTableList.as_view(), name='popDataTableList'),
]
