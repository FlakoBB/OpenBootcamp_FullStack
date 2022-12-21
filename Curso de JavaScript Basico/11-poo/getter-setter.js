class Persona {
    nombre;
    #edad;

    constructor(nom, edad) {
        this.nombre = nom
        this.#edad = edad
    }

    saludo() {
        return `Hola soy ${this.nombre}`
    }

    // getter -> nos permite acceder a un atributo privado o protegido
    getEdad() {
        return this.#edad
    }

    // setter -> nos permite modificar un atributo provado o protegido
    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}


const newPersona = new Persona("Flako", 23)
console.log(newPersona) // el objeto solo mostrara el nombre (publico)
console.log(newPersona.saludo())

// los metodos getter y setter siempre seran publicos
console.log(newPersona.getEdad()) // con este metodo sí podemos visualizar la edad
newPersona.setEdad(24) // modificamos la edad
console.log(newPersona.getEdad())