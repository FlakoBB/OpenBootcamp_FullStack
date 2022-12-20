function suma(a, b) {
    return a + b
}

function multiplicacion(a, b) {
    return a * b
}

function potencia(a, b) {
    return a ** b
}

function factorial(a) {
    let fac = 1
    for(i = 2; i <= a; i++) {
        fac *= i
    }
    return fac
}

// hacer publicas las funciones para poder usarlas en otros archivos

module.exports = {
    suma,
    multiplicacion,
    potencia,
    factorial
}