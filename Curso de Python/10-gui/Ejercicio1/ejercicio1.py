import tkinter

window = tkinter.Tk()

seleccion = tkinter.StringVar()

def muestraOpcion():
    print(seleccion)

rb1 = tkinter.Radiobutton(window, text="Opcion 1", value="Opcion 1", variable=seleccion, command=muestraOpcion)
rb2 = tkinter.Radiobutton(window, text="Opcion 2", value="Opcion 2", variable=seleccion, command=muestraOpcion)
rb3 = tkinter.Radiobutton(window, text="Opcion 3", value="Opcion 3", variable=seleccion, command=muestraOpcion)

rb1.grid(column=0, row=0, sticky=tkinter.W)
rb2.grid(column=0, row=1, sticky=tkinter.W)
rb3.grid(column=0, row=2, sticky=tkinter.W)

window.mainloop()