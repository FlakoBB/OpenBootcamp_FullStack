// declaracion

let array1 = new Array(1, 2, 3, 4, 5, 6)
console.log(array1)
// o
let array2 = [1, 2, 3, 4, 5, 6]


// acceder a sus valores a travez de sus indices
console.log(array1[0])
console.log(array1[2])
console.log(array1[3])
// console.log(array1[n])


// introduccir nuevos valores
// al final
array1.push(7, "ocho", {'9': true})
console.log(array1)

// al inicio
array1.unshift("inicio", 0)
console.log(array1)


// eliminar valores
// al final
array1.pop()
console.log(array1)
array1.pop()
console.log(array1)

// al inicio
array1.shift()
console.log(array1)
array1.shift()
console.log(array1)


// metodo para eliminar, agregar y modificar valores
console.log(array2)
// eliminar
array2.splice(1, 2) // splice(apartirDeQueIndice, cuantosElementosEliminara)
console.log(array2)

// agregar
array2.splice(2, 0, "Hola", 2, false) // splice(apartirDeQueIndice, cuantosElementosEliminara, Que, elementos, va, a, agregar)
console.log(array2)

// modificar
array2.splice(3, 1, "modificacion")
console.log(array2)