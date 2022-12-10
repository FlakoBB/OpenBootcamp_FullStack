// FOR

// for(inicializacion; condicion; actualizacion) {
//     contenido del bucle
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < lista.lenght; i++) {
    console.log(lista[i]);
}


// FOR OF

for (valor of lista) {
    console.log(valor);
}


// FOR EACH

lista.forEach(valor => {console.log(valor)});



// FOR IN

let persona = {
    nombre: "Flako",
    apellido: "BB",
    edad: 23,
    isDeveloper: true
}

for (propiedad in persona) {
    console.log(propiedad) // Devuelve las variables
    console.log(persona[propiedad]) // Devuelve el contenido de las variables
}