// declaracion
const obj1 = {
    nombre: "Flako",
    apellido: "BB",
    "es-desarrollador": true
}

// acceso a sus valores
console.log(obj1.nombre)
console.log(obj1["es-desarrollador"])

// duplicacion de un objeto
// forma incorrecta
const obj2 = obj1 // se copia la direccion de memoria
console.log("objeto1.1: ", obj1)
console.log("objeto2.1: ", obj2)

obj2.nombre = "Joseph" // el cambio tambien se hace en el obj1
console.log("objeto1.2: ", obj1)
console.log("objeto2.2: ", obj2)

// forma correcta
const obj3 = {...obj1} // con el factor de propagacion copiamos las claves y sus valores
console.log("objeto1.3: ", obj1)
console.log("objeto3.1: ", obj3)

obj3.nombre = "Ryan" // solamente aplica el cambio en el obj3
console.log("objeto1.4: ", obj1)
console.log("objeto3.2: ", obj3)


// Ordenar una lista de objetos
const peliculas = [
    {titulo: "Enredados", fecha: 2010 },
    {titulo: "Los Pinguinos De Madagascar", fecha: 2014 },
    {titulo: "Como Entrenar A Tu Dragon", fecha: 2010 }
]
console.log("Desordenada")
console.log(peliculas)

// .sort()
peliculas.sort((a, b) => a.fecha - b.fecha)
console.log("Ordenada")
console.log(peliculas)