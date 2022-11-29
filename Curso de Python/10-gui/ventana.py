import tkinter

ventana = tkinter.Tk()

label1 = tkinter.Label(ventana, text="Label1", bg="red", fg="white")
label1.pack(ipadx=45, ipady=15, fill="x")

label2 = tkinter.Label(ventana, text="Label2", bg="blue", fg="white")
label2.pack(ipadx=45, ipady=15, fill="x")

label3 = tkinter.Label(ventana, text="Label2", bg="green", fg="white")
label3.pack(ipadx=45, ipady=15, fill="x")

label4 = tkinter.Label(ventana, text="Label4", bg="cyan", fg="white")
label4.pack(ipadx=15, ipady=15, side="left")

label5 = tkinter.Label(ventana, text="Label5", bg="pink", fg="white")
label5.pack(ipadx=15, ipady=15, side="left")

label6 = tkinter.Label(ventana, text="Label6", bg="yellow", fg="white")
label6.pack(ipadx=15, ipady=15, side="left")

ventana.mainloop()