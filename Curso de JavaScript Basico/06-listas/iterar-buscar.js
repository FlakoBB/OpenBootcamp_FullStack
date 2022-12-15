const lista1 = [1, false, "barcelona", null, 30]

// iterar (forma antigua)
for(i = 0; i < lista1.length; i++) {
    console.log(lista1[i])
}

// iterar (forma ES6)
lista1.forEach(valor => {console.log(valor)})


// buscar un valor dentro de una lista
const variable = lista1.find(valor => {
    if (valor === "barcelona") {
        return true
    }
})

console.log(variable)

// lista de objetos
const listaObjetos = [
    {nombre: "Juan", edad: 20},
    {nombre: "Gabriela", edad: 22},
    {nombre: "Salvador", edad: 30},
    {nombre: "Andrea", edad: 26}
]

// encontrar la edad de Gabriela
// forma 1
const objeto = listaObjetos.find(o => o.nombre === "Gabriela")
console.log(objeto.edad)

// forma 2
const { edad } = listaObjetos.find(o => o.nombre === "Gabriela")
console.log(edad)