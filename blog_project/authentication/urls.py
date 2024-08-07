from django.urls import path,include
from .views import registeration

urlpatterns = [

    path('register/', registeration, name='registeration'),
]