// Calcula el factorial de 10 con un while

let factorial = 1;
let i = 1;

while (i <= 10) {
    factorial *= i;
    i++;
}

console.log(`El factorial de 10 es: ${factorial} (calculado con while)`);