# Escribe un programa que sea capaz de mostrar los números del 1 al 100 en orden inverso.

lista = [] # lista vacia

for numero in range(1, 100+1):
    lista.append(numero) # llenamos la lista con numeros del 1 al 100

listareversa = sorted(lista, reverse=True) # ordenamos la lista en orden inverso

for numero in listareversa:
    print(numero) # mostramos cada numero