// Su valor puede cabiar y es una variable global
var a = "Hola";

console.log(a); // Hola

a = "Adios";

console.log(a);  // Adios

// Su valor puede cambiar pero es una variable local
let b = 30;

if (true) {
    let b = "Flako";
    console.log(b);  // Flako
}

console.log(b);  // 30 

// Su valor no puede cambiar
const c = 10;

// c = 20; // Error -> No se puede cambiar una constante

console.log(c); // 10