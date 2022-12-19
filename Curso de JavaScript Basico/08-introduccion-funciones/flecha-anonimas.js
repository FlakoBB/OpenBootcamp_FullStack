const arreglo = [2, 10, 30, 100]

// funcion anonima
const arreglo2 = arreglo.map(valor => valor * 2) // funcion anonima que multiplica cada elemento del arreglo por 2
console.log(arreglo2)

// funcion tipo flecha
const tripleValor = valor => valor * 3 // declaracion de la funcion tipo flecha

console.log(tripleValor(6)) // multiplica por 3 el parametro