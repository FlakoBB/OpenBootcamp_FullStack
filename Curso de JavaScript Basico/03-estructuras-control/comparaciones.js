// IGUALDAD

// == compara el valor (compracion devil)
// === compara el valor y el tipo de dato (comparacion fuerte)

var a = 5
var b = "5"

if (a == b) {
    console.log("a es igual a b - Devil");
}

if (a === b) {
    console.log("a es igual a b - Fuerte");
} else {
    console.log("a y b no son iguales por el tipo");
}


// DESIGUALDAD

// != compara el valor (compracion devil)
// !== compara el valor y el tipo de dato (comparacion fuerte)

if (a != b) {
    console.log("a es diferente a b - Devil");
}

if (a !== b) {
    console.log("a es diferente a b - Fuerte");
}

// MAYOR IGUAL y MENOR IGUAL

var c = 30
var d = 10

if (c > d) {
    console.log("c es mayor que d")
}

if (c >= d) {
    console.log("c es mayor o igual a d");
}

if (d < c) {
    console.log("d es menor que c")
}

if (d <= d) {
    console.log("d es menor o igual a c");
}