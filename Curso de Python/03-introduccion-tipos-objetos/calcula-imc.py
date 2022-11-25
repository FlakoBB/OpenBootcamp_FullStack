peso = float(input("Ingresa tu peso (kg): "))
estatura = float(input("Ingresa tu estatura (m): "))

imc = peso / (estatura ** 2)

imc_round = round(imc, 2)

print(imc_round)