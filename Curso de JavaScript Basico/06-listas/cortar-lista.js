const lista = [1, 2, 3, 4, 5, 6]

console.log(lista.slice(2)) // .slice(x) genera otra lista desde el indice x hasta el final de la lista original

console.log(lista.slice(2, 4)) // .slice(x, y) genera una lista desde el indice x hasta el indice y (sin tomar el valor de y)

// usar valores negativos
const lista2 = lista.slice(1, -2) // el ultimo indice de una lista siempre sera -1
console.log(lista2)