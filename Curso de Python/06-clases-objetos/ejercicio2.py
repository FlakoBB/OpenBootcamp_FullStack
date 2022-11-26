class alumno:
    nombre = None
    calificacion = None

    def recibirDatos(self, nom, cal):
        self.nombre = nom
        self.calificacion = cal

    def datos(self):
        print("Nombre: ",self.nombre)
        print("Calificacion: ",self.calificacion)

    def aprovacion(self):
        if self.calificacion >= 6:
            print(self.calificacion, " es aprovatorio")
        else:
            print(self.calificacion," no es aprovatorio")

obj = alumno()
obj.recibirDatos("jose", 5)
obj.datos()
obj.aprovacion()