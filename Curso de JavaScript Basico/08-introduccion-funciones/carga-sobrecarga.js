// Carga -> una funcion invoca a otra
function saludar() {
    hola()
}

function hola() {
    return "Hola soy la funcion hola"
}

console.log(saludar())

// Sobrecarga -> una funcion se invoca a si misma
function recursiva(){
    recursiva()
}

// console.log(recursiva()) Genera un error: Maximum call stack size exceeded