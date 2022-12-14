let texto_largo = "Saulis corriendo se escondio bajo su cama. La mamá pensó que Saulis mentía pero en realidad Saulis había visto a los abogados de su padre, los cuales venían a buscar a la pequeña Saulis para que se fuera con ellos."


// comparar caracteres - silabas - palabras
console.log(texto_largo.match(/ma/g)) // devuelve una lista con todas las veces que encontro la exprecion regular indicada

// indicar si existe o no una palabra dentro de la cadena
console.log(texto_largo.includes("padre")) // true

// indicar si el texto inicia con la palabra indicada
console.log(texto_largo.startsWith("Saulis")) // true

// indicar si el texto termina con la palabra indicada
console.log(texto_largo.endsWith("ellos.")) // true