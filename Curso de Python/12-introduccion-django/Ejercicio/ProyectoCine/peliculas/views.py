from django.shortcuts import render
import sqlite3
from .models import Directores, Peliculas
# Create your views here.
def index(request):
    directores = Directores.objects.all()
    peliculas = Peliculas.objects.all()

    return render (
        request,
        'index.html',
        context={
            'directores': directores,
            'num_peliculas': peliculas,
        }
    )