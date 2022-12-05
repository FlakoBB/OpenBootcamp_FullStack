from django.db import models

class Directores(models.Model):
    nombre = models.CharField(max_length=60)
    nacionalidad = models.CharField(max_length=30)

    def __str__(self):
        return self.nombre

class Peliculas(models.Model):
    titulo = models.CharField(max_length=40)
    descripcion = models.TextField(max_length=160)
    director = models.ForeignKey('Directores',  on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.titulo

