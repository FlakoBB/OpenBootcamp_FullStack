const lista = [8, 55, 2, 354, 93, 45, 2, 875, 1093, 666]

console.log(lista)

lista.sort((a, b) => { //(a: anterior, b: actual)
    if (a < b) {
        return -1
    } else if (a < b) {
        return +1
    } else { // a === b
        return 0
    }
})

console.log(lista)

// otra forma mas simple
const lista2 = [9, 3, 5, 6, 10, 3, 4, 30, 99]

lista2.sort((a, b) => a - b) // menor a mayor; para mayor a menor invertir las variables
console.log(lista2)


// con lista de objetos
const listaObjetos = [
    {nombre: "Juan", edad: 20},
    {nombre: "Gabriela", edad: 22},
    {nombre: "Salvador", edad: 30},
    {nombre: "Andrea", edad: 26}
]
console.log(listaObjetos)

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)