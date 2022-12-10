// Calcula el factorial de 10 usando un while, un if y un break

let factorial = 1;
let i = 1;

buclewhile: while (true) {    
    factorial *= i;
    i++;

    if (i === 10) {
        break buclewhile;
    }
}

console.log(`El factorial de 10 es: ${factorial} (calculado usando while, if y break)`)