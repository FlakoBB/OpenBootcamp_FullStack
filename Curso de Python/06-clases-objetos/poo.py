class vehiculo:
    color = "rojo"
    ruedas = 4
    puertas = 2

class coche(vehiculo):
    velocidad = 200
    cilindrada = 6

obj = coche()

print("Datos del coche")
print("Color: ", obj.color)
print("Ruedas: ", obj.ruedas)
print("Puertas: ", obj.puertas)
print("Velocidad: ", obj.velocidad)
print("Cilindrada: ", obj.cilindrada)