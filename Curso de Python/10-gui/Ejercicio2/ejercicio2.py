import tkinter

window = tkinter.Tk()

titulo = tkinter.Label(window, text="Etiqueta de Titulo", bg="cyan", fg="black")
titulo.pack(ipadx=45, ipady=15, fill="x")

boton = tkinter.Button(window, text="Boton")
boton.pack()

selec = tkinter.StringVar()
radio1 = tkinter.Radiobutton(window, text="Radio 1", value="1", variable=selec)
radio1.pack()
radio2 = tkinter.Radiobutton(window, text="Radio 2", value="2", variable=selec)
radio2.pack()

check = tkinter.Checkbutton(window, text="Check")
check.pack()

window.mainloop()