// some() verifica que al menos un valor cumpla una condicion
const lista = [3, 8, 10, 23, 83, 234342, 32432, -1]

const res = lista.some(valor => valor < -0) // compara si al menos un valor es menor que 0

console.log(res)

const existe = lista.some(valor => valor === 83) // verifica que exista el 83 dentro del arreglo

console.log(existe)


/// con lista de objetos
const listaObjetos = [
    {nombre: "Juan", edad: 20},
    {nombre: "Gabriela", edad: 22},
    {nombre: "Salvador", edad: 30},
    {nombre: "Andrea", edad: 26}
]

const existePersona = listaObjetos.some(valor => valor.nombre === "Andrea")

console.log(existePersona)


// Como obtener una lista apartir de un objeto iterable
const cadena = "Hola soy una cadena"

const listaCadena = Array.from(cadena)
console.log(listaCadena)

const set = new Set([2, "hola", true, null])
console.log(typeof set)

const listaSet = Array.from(set)
console.log(listaSet)


// guardar los indices de un arreglo en una lista
const keys = lista.keys()
console.log(keys)

const listaKeys = Array.from(keys)
console.log(listaKeys)