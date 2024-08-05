from django.shortcuts import render

# Create your views here.

# Home, Add, Read, Update, Delete, Search, filter, registeration, login, logout, reset_passoword


def home(request):
    return render(request, 'home.html')

