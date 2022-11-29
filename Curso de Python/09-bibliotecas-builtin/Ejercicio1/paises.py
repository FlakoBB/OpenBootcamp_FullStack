listaUser = input("Ingresa una lista de paises separados por una coma ',':\n")

nuevaLista = listaUser.split(',')
listaFormato = []

for item in nuevaLista:
    pais = item.strip().title()
    
    if pais not in listaFormato:
        listaFormato.append(pais)

    listaFormato.sort()

print(listaFormato)