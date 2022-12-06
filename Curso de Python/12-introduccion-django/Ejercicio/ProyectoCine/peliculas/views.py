from django.shortcuts import render
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

def pelisDirector(request):
    id_director = request.POST['dir_id']
    titulos = Peliculas.objects.filter(director_id=id_director)

    return render (
        request,
        'peliculs.html',
        context={
            'titulos': titulos,
        }
    )