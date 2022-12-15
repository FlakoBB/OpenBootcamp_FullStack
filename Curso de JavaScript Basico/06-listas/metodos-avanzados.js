const lista = ["Madero", "Martinez", "Sevilla", "Algoritmo", "Melchor"]

// map()
const newLista = lista.map((valor, indice) => `${indice + 1}- ${valor}`)
console.log(newLista)

// filte()
const listaObjetos = [
    {nombre: "Juan", edad: 17},
    {nombre: "Gabriela", edad: 22},
    {nombre: "Salvador", edad: 30},
    {nombre: "Andrea", edad: 16}
]

// const mayores = listaObjetos.filter(obj => {
//     if (obj.edad > 18) {
//         return true
//     } else {
//         return false
//     }
// })

const mayores = listaObjetos.filter(obj => obj.edad > 18)

console.log(mayores)

// reduce()
const otraLista = [10, 20, 30, 40, 50, 60]

const suma = otraLista.reduce((acumulado, actual, indice, listaOriginal) => {
    console.log(acumulado)
    console.log(actual)
    console.log(indice)
    console.log(listaOriginal)
    return acumulado + actual
})

console.log(suma)