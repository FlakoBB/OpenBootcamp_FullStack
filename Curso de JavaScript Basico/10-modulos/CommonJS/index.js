// importar un modulo
const matematicas = require('./modulos/matematicas.js')
// otra forma de importar
const { potencia, multiplicacion } = require('./modulos/matematicas.js') // con esto especificamos las funciones que importará

// usar las funciones del modulo
const factor = matematicas.factorial(5)
console.log(factor)

// tambien podemos hacer:
const suma = matematicas.suma;

// para usar:
const sum = suma(4, 6)
console.log(sum)


// con la segunda forma de importacion
const pot = potencia(6, 2)
console.log(pot)

const mult = multiplicacion(9, 3)
console.log(mult)