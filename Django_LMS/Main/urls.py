from django.urls import path
from . import views

app_name = "Main"

urlpatterns = [
    path('', views.home, name='home'),
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>', views.TeacherDetail.as_view()),
     
]
