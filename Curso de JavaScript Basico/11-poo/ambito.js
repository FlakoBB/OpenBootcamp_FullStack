class Persona {
    // tipos de atributos
    // publico
    nombre; // se puede acceder desde fuera de la clase
    // privado
    #edad; // unicamente se puede acceder desde la clase
    // protegido
    _isDeveloper; // se puede acceder desde la case y sus desendientes

    constructor(nom, edad, ocupa) {
        this.nombre = nom
        this.#edad = edad
        this._isDeveloper = ocupa
    }
    // tipos de metodos
    // publico
    obtenEdad() {
        return this.#edad
    }
    // privado
    #saludo() {
        return `Hola ${this.nombre}`
    }
    // protegido
    _ocupacion() {
        return `Es desarrollador ${this._isDeveloper}`
    }
}


const persona = new Persona("Flako", 23, true)

console.log(persona.obtenEdad())
