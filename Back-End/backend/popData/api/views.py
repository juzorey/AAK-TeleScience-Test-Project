
from django.http import JsonResponse
from rest_framework.response import Response

from popData.models import PopDataTable as popDataTableModel
from .serializers import PopDataTableSerializer
from rest_framework import generics
from rest_framework.views import APIView



class popDataTableList(generics.ListCreateAPIView):
    queryset = popDataTableModel.objects.all()
    serializer_class = PopDataTableSerializer