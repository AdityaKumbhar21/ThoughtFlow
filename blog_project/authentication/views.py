from django.shortcuts import render, redirect

from django.contrib.auth import login, authenticate, logout


# Create your views here.

def registeration(request):
    



    return render(request,'register.html')

