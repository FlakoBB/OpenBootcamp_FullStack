
let palabra1 = "FlaKo"
let palabra2 = "flako"

console.log(palabra1 === palabra2) // false

// transformar la cadena a minusculas
console.log(palabra1.toLowerCase === palabra2.toLowerCase) // true

//transformar la cadena a mayusculas
console.log(palabra1.toUpperCase === palabra2.toUpperCase) // true


// concatenar cadenas
let cadena1 = "Cadena 1."
let cadena2 = "Cadena 2."

console.log(cadena1.concat(" ", cadena2))
console.log(cadena1 + " " + cadena2)
console.log(`${cadena1} ${cadena2}`)


// eliminar espacion al inicio y al final de una cadena
let cad_espacios = "   Cadena con espacion al inicio y al final   "

// eliminar espacios al inicio
console.log(cad_espacios.trimStart())

// eliminar espacios al final
console.log(cad_espacios.trimEnd())

// eliminar espacios al inicio y al final
console.log(cad_espacios.trim())


// obtener el caracter en cierta posicion
let otra_cadena = "Hola mi nombre es Flako y soy developer. Realmente Flako es mi apodo."

console.log(otra_cadena.charAt(2)) // l
console.log(otra_cadena[2]) // l (Las cadenas son como una lista de caracteres)


// obtener la posicion de una palabra
console.log(otra_cadena.indexOf("Flako")) // devuelve la posicion de la primera letra de la palabra (La primera que encuetra)
console.log(otra_cadena.lastIndexOf("Flako")) // devuelve la posicion de la primera letra de la palabra (La utima que encuetra)