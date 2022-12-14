// metodos mas utilizados en cadenas

// obtener longitud

let cadena = "Soy una cadena"
console.log(cadena.length)


// obtener una parte de la cadena

console.log(cadena.slice(0, 4)) // de la posicion 0 a la 4

console.log(cadena.substring(0,4)) // de la posicion 0 a la 4

console.log(cadena.substr(0, 8)) // de la posicion 0 hasta alcanzar la longitud = 8


// remplazar parte  de una cadena

let saludo = "Hola Flako"

console.log(saludo.replace('Flako', 'Mundo'))

let texto_largo = "Saulis corriendo se escondio bajo su cama. La mamá pensó que Saulis mentía pero en realidad Saulis había visto a los abogados de su padre, los cuales venían a buscar a la pequeña Saulis para que se fuera con ellos."

console.log(texto_largo.replace("Saulis", "Bellakath")) // Solo cambia la primera concordancia

console.log(texto_largo.replace(/Saulis/g, "Bellakath")) // usando la esprecion regular /g (glgobal) hace el cambio en todas las concordancias