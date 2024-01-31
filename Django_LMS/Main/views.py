from django.shortcuts import render
from rest_framework import response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import permissions
from . import models
from .serializers import TeacherSerializer

def home(request):
    return render(request, 'hello')

class TeacherList(generics.ListCreateAPIView):
   
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
    


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
 

 # def get(self, request):
    #     teacher= models.Teacher.objects.all()
    #     serializer = TeacherSerializer(teacher, many=True)
    #     return response(serializer.data)