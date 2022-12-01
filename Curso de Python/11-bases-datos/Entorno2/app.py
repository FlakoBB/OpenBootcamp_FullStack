import sqlite3

conn = sqlite3.connect("DB/baseF.db")
cursor = conn.cursor()

# cursor.execute("CREATE TABLE usuarios (id INT PRIMARY KEY NOT NULL, user_name VARCHAR NOT NULL, password VARCHAR NOT NULL);")
# cursor.execute("INSERT INTO usuarios (id, user_name, password) VALUES (3, 'Joshi', 'jaja')")
# conn.commit()

rows = cursor.execute("SELECT * FROM usuarios;")

for row in rows:
    print(row)

cursor.close()
conn.close()