// .every() -> verifica que todos los valores cumplan una condicion
const arreglo = [1, 2, 10, -3, 5, -10]

// const res = arreglo.every(valor => {
//     if (typeof valor === "number") return true
//     return false
// })
const res = arreglo.every(valor => typeof valor === "number")

console.log(res)


// comparacion de dos listas
const lis1 = [1, 2, 3, 4]
const lis2 = [1, 2, 3, 4]

const compararListas = (lista1, lista2) => { // declaracion de funcion con dos parametos
    if (lista1.lenght !== lista2.lenght) { // primer comparacion (varifica que las listas tengan la misma longitud)
        return false
    } else {
        const resul = lista1.every((valor, indice) => valor === lista2[indice]) // compara 1*1 los valores de ambas listas
        return resul
    }
}

console.log(compararListas(lis1, lis2))

const lis3 = [1, 2, 3, 5]

console.log(compararListas(lis1, lis3))

const lis4 = [1, 2, 3, 4, 5, 6]

console.log(compararListas(lis2, lis4))