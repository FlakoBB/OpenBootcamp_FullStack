import sqlite3
import getpass

def main():
    username = input("Usuario: ")
    password = getpass.getpass("Contraseña: ")

    if verifica_credenciales(username, password):
        print("Login Correcto")
    else:
        print("Login Incorrecto")

def verifica_credenciales(usuario, password):
    conn = sqlite3.connect("DB/baseF.db")
    cursor = conn.cursor()

    query = f"SELECT id FROM usuarios WHERE user_name = '{usuario}' AND password = '{password}'"
    rows = cursor.execute(query)
    data = rows.fetchone()

    cursor.close()
    conn.close()

    if data == None:
        return False

    return True

if __name__ == '__main__':
    main()
