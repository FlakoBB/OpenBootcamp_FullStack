// definicion de una clase
class Persona {
    // atributos de la clase
    nombre;
    edad;
    isDeveloper;

    // constructor de la clase (metodo inicial)
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper; // con la palabra reservada "this" accedemos a los atributos de la clase y no a las variables del metodo
    }

    // metodos de la clase
    saludo() {
        console.log(`Hola, soy ${this.nombre} tengo ${this.edad} años.`)
    }
}

// instancia de una clase
const nueva_persona = new Persona("Flako", 23, true)

console.log(nueva_persona) // devuelve un objeto con los atributos de la clase

// acceder a los metodos de la clase
nueva_persona.saludo()

// instansof
console.log(nueva_persona instanceof Persona) // verifica si la instancia pertenese a una clase