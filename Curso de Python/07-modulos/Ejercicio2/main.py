import time

hora = int(time.strftime("%I"))
minutos = int(time.strftime("%M"))

print("Son las: ",time.strftime("%I:%M"))

if hora == 7 and minutos >= 0:
    print("Vamonos a casa")
elif hora < 7:
    horasFaltantes = 7 - hora
    minutosFaltantes = 60 - minutos
    print("Faltan",horasFaltantes,"horas y",minutosFaltantes,"minutos para ir a casa")