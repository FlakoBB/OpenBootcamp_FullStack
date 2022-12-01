import sqlite3

def main():
    id_user = input("ID: ")
    usuario = input("Nombre de usuario: ")
    password = input("Contraseña: ")

    registrar_user(id_user, usuario, password)

def registrar_user(id_user, user, password):
    # conn = sqlite3.connect("DB/baseF.db", isolation_level=None) Con isolation_level=None no es nesesario usar conn.commit()
    conn = sqlite3.connect("DB/baseF.db")
    cursor = conn.cursor()

    query = '''INSERT INTO usuarios (id, user_name, password) VALUES (?, ?, ?)'''
    # query = f"INSERT INTO usuarios (id, user_name, password) VALUES ({id_user}, '{user}', '{password}')"
    cursor.execute(query, (id_user, user, password))
    conn.commit()

    cursor.close()
    conn.close()

if __name__ == '__main__':
    main()