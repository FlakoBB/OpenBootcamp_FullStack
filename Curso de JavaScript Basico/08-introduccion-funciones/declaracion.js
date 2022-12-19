function saludar(nombre) {
    const saludo = `Hola ${nombre}`
    return saludo
}

const saludo = saludar("Flako")
console.log(saludo)


// funcion con objeto como parametro
function saludoPersona(persona) {
    const saludo = `Hola ${persona.nombre} ${persona.apellido}`
    return saludo
}

const personaObj = {nombre: "Joseph", apellido: "Ryan"}
const saludo2 = saludoPersona(personaObj)
console.log(saludo2)


// funcion con valores predeterminados en los parametros
function imprimeNumero(numero = 30) { // parametro = valorPorDefecto
    return numero
}

const num = imprimeNumero() // si no se le pasa un valor en la invocacion, la funcion utilizara el var por defecto
console.log(num)


// funcion con parametros indeterminados
function variosParametros(...parametros) {
    console.log(parametros) // devuelve una lista con todos los parametros recibidos
}

function sumaNumeros(...numeros) {
    let suma = numeros.reduce((a, b) => a + b)
    return suma
}

const suma = sumaNumeros(10, 30, 60, 1)
console.log(suma)