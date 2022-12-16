const compras = ["galletas", "papas", "jugo", "palomitas", "bolillo"]

console.log("Arreglo original")
compras.forEach((producto, i) => {
    console.log(`${i + 1}. ${producto}`)
});

console.log("Arreglo más un elemento (aceite)")
compras.push("aceite")
compras.forEach((producto, i) => {
    console.log(`${i + 1}. ${producto}`)
});

console.log("Arreglo menos un elemento (aceite)")
compras.pop()
compras.forEach((producto, i) => {
    console.log(`${i + 1}. ${producto}`)
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const peliculas = [
    {titulo: "Como Entrenar A Tu Dragon", director: "Chris Sanders", fecha: new Date(2010, 02, 21) },
    {titulo: "Enredados", director: "Nathan Greno", fecha: new Date(2010, 10, 24) },
    {titulo: "Los Pinguinos De Madagascar", director: "Eric Darnell", fecha: new Date(2014, 10, 28) },
]

console.log("Arreglo original de Peliculas")
peliculas.forEach(peli => console.log(peli))

console.log("Peliculas anteriores a 2012")
const antes2012 = peliculas.filter(peli => peli.fecha.getFullYear() < 2012)
console.log(antes2012)

console.log("Lista de Directores")
const directores = peliculas.map(peli => peli.director)
console.log(directores)

console.log("Lista de Titulos")
const titulos = peliculas.map(peli => peli.titulo)
console.log(titulos)

console.log("Concatenacion Directores con Peliculas (concat)")
const dirConcatPelis = directores.concat(titulos)
console.log(dirConcatPelis)

console.log("Concatenacion Directores con Peliculas (factor de propagacion)")
const dirPelisFP = [...directores, ...titulos]
console.log(dirPelisFP)