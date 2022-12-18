const array = (1, 2, 3, "hola", {id: 10}, 2, "hola")

const miSet = new Set(array)
console.log(miSet)

// .add() -> permite añadir un nuevo elemento al set
miSet.add("adios")
console.log(miSet)

// .delete() -> permite eliminar elementos del set
miSet.delete("hola")
console.log(miSet)

// .clear() -> vacia por completo el set (borra todos los elementos)
// miSet.clear()

// .has() -> devuelve si existe o no un elemento en el set
console.log(miSet.has("2"))

// .size -> devuelve la cantidad de elementos que contiene el set
console.log(miSet.size)

// iteracion en un set
miSet.forEach(valor => console.log(`valor: ${valor}`))

// obtener un objeto iterable del set
const iterableMiSet = miSet.values()
console.log(iterableMiSet)

// convertir el set nuevemanete en un arreglo
const arregloMiSet = [...miSet]
console.log(arregloMiSet)