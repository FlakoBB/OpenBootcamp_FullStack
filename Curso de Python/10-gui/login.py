import tkinter
from tkinter import ttk

window = tkinter.Tk()

"""

    .grid crea una regilla (o matriz)
    
        (0,0) (0,1) (0,2) (x,y)
        (0,0) (0,1) (0,2) (x,y)
        (0,0) (0,1) (0,2) (x,y)
        (x,y) (x,y) (x,y) (x,y)

"""

userNameL = ttk.Label(window, text="Usuario:")
userNameL.grid(column=0, row=0, sticky=tkinter.W, padx=10, pady=10)

userName = ttk.Entry(window)
userName.grid(column=1, row=0, sticky=tkinter.W, padx=10, pady=10)

passwordL = ttk.Label(window, text="Contraseña:")
passwordL.grid(column=0, row=1, sticky=tkinter.W, padx=10, pady=10)

password = ttk.Entry(window, show="*")
password.grid(column=1, row=1, sticky=tkinter.W, padx=10, pady=10)

btnLogin = ttk.Button(window, text="Iniciar sesión")
btnLogin.grid(column=1, row=2, sticky=tkinter.E, padx=10, pady=10)

# .place posiciona el elemento en un lugagar especifico en la ventana

label = tkinter.Label(window, text="HOLA!!!", bg="green", fg="red")
label.place(x=10, y= 80)

window.mainloop()