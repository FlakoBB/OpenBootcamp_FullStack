class Persona {
    _nombre;
    _edad;

    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo() {
        return `Hola soy ${this._nombre}, tengo ${this._edad} años.`
    }
}

// herencia
class Desarrollador extends Persona {
    // obtiene los mismos atributos y metodos del padre, ademas puede tener los propios
    lenguaje;
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad) // usamos el constructor del padre
        this.lenguaje = lenguaje
    }

    saludo() { // override -> sobreescribir una funcion del padre

        let s = super.saludo() // usamos tal cual el metodo del padre
        return `${s} Soy desarrollador en ${this.lenguaje}.`
        // polimorfismo -> varias formas
    }
}

const nuevoDev = new Desarrollador("Flako", 23, "JavaScript")

console.log(nuevoDev.saludo())