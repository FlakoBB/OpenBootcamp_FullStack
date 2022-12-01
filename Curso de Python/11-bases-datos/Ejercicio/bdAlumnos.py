import sqlite3

def main():
    conn = sqlite3.connect("grupo.db")
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS alumnos (id INT PRIMARY KEY NOT NULL, nombre VARCHAR, apellido VARCHAR)")
    cursor.close()
    conn.close()
    print()
    print("-----------------------------")
    print("Que Quieres HACER?")
    print("(1) Registrar Alumno")
    print("(2) Buscar Alumno")
    print("(3) Salir")
    opcion = int(input("Ingresa el numero de tu opción: "))

    match (opcion):
        case 1:
            id_alumno = input("ID: ")
            nombre = input("NOMBRE: ")
            apellido = input("APELLIDO: ")
            registrar_alumno(id_alumno, nombre, apellido)
        case 2:
            nombre = input("NOMBRE A BUSCAR: ")
            buscar_alumno(nombre)
        case 3:
            exit()
        case _:
            print("Elige una opción valida.")
            main()

def registrar_alumno(id_alumno, nombre, apellido):
    conn = sqlite3.connect("grupo.db")
    cursor = conn.cursor()

    query = f"INSERT INTO alumnos (id, nombre, apellido) VALUES ({id_alumno}, '{nombre}', '{apellido}')"
    cursor.execute(query)
    conn.commit()

    cursor.close()
    conn.close()

    main()

def buscar_alumno(nombre):
    conn = sqlite3.connect("grupo.db")
    cursor = conn.cursor()

    query = f"SELECT * FROM alumnos WHERE nombre = '{nombre}'"
    rows = cursor.execute(query)

    for row in rows:
        idA = row[0]
        nom = row[1]
        ape = row[2]
        print("ALUMNO ENCONTRADO...")
        print(f"ID: {idA}\nNOMBRE: {nom}\nAPELLIDO: {ape}")
    
    main()

if __name__ == '__main__':
    main()