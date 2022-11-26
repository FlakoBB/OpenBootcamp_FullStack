# Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.

def añoBisiesto (año):
    if año % 4 == 0 and año % 100 != 0:
        print(año,", es bisiesto")
    else:
        print(año,", no es bisiesto")

añoUs = int(input("Introduce un año: "))

añoBisiesto(añoUs)