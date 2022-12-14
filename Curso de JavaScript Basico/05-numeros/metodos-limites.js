// operador .valueOf() - obtener valores numericos a partir de literales
let a = 2
let b = new Number(3)

console.log(a + b) // = 5
console.log(a.valueOf() + b.valueOf()) // = 5


// NaN (Not a Number), Infinity
let num = new Number("30")
console.log(num) // NaN

let numerador = 20
let divisor1 = 0
let divisor2 = null

console.log(numerador / divisor1) // Infinity
console.log(numerador / divisor2) // Infinity


// convertir strings a numero
let num1 = "30"
let num2 = "30.10"

console.log(parseInt(num1))
console.log(parseFloat(num2))


// numeros hexadecimales (base 16)
let numHex = '0xf3010a'
console.log(parseInt(numHex, 16)) // transforma de hexadecimal a decimal


// valores minimo y maximo aceptados por JS
let min_precision = Number.EPSILON
console.log(min_precision)

let min_valor = Number.MIN_VALUE
console.log(min_valor) // devuelve el numero más pequeño con el que puede trabajar JS

let max_valor = Number.MAX_VALUE
console.log(max_valor) // devuelve el numero más grande con el que puede trabajar JS