const lista1 = [1, "dos", {"tres": 3}, true, null]
const lista2 = ["Hola", 20, false, undefined, NaN]


const lista3 = lista1.concat(lista2)
console.log(lista3)


// unir listas con el factor de propagacion
console.log(...lista1) // ...lista => trata cada valor de la lista como un valor individual

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR -> mal entendido con el factor de propagacion
const lista5 = [lista1, lista2] // genera una lista con dos elementos tipo lista
console.log(lista5)