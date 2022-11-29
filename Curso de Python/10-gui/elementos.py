import tkinter
from tkinter import ttk

window = tkinter.Tk()

# Radio Buttons

seleccion1 = tkinter.StringVar()

rb1 = tkinter.Radiobutton(window, text="Opcion 1", value="1", variable=seleccion1)
rb2 = tkinter.Radiobutton(window, text="Opcion 2", value="2", variable=seleccion1)
rb3 = tkinter.Radiobutton(window, text="Opcion 3", value="3", variable=seleccion1)

rb1.grid(column=0, row=0, sticky=tkinter.W)
rb2.grid(column=0, row=1, sticky=tkinter.W)
rb3.grid(column=0, row=2, sticky=tkinter.W)


seleccion2 = tkinter.StringVar()

rb4 = tkinter.Radiobutton(window, text="Opcion 1.2", value="1", variable=seleccion2)
rb5 = tkinter.Radiobutton(window, text="Opcion 2.2", value="2", variable=seleccion2)

rb4.grid(column=3, row=3, sticky=tkinter.E)
rb5.grid(column=3, row=4, sticky=tkinter.E)

# CheckBox

sectCheck = tkinter.StringVar()
chb = tkinter.Checkbutton(window, text="Checkbox", variable=sectCheck)
chb.grid(column=1, row=5, sticky=tkinter.W)


#Eventos

def Funcion1():
    print("Boton con atributo 'command'")

btn1 = tkinter.Button(window, text="Boton 1", command=Funcion1)
btn1.grid(column=0, row=6)

def Funcion2(event):
    print("Clic derecho al boton 2")

def Funcion3(event):
    print("Doble clic al boton 2")

btn2 = tkinter.Button(window, text="Boton 2")
btn2.grid(column=2, row=6)

btn2.bind('<Button-3>', Funcion2)
btn2.bind('<Double-1>', Funcion3)

window.mainloop()