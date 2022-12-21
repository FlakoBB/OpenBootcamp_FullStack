class Estudiante {
    #nombre;
    #asignaturas = [];

    constructor(nombre, asignaturas) {
        this.#nombre = nombre
        this.#asignaturas = asignaturas
    }

    obtenDatos() {
        return {
            nombre: this.#nombre,
            asignaturas: this.#asignaturas
        }
    }
}

const asig = ["JavaScript", "HTML", "CSS"]

const newEstudiante = new Estudiante("Ramiro", asig)

console.log(newEstudiante.obtenDatos())