// para exportar debemos poner la paralabra reservada "export" antes de los elementos
export function suma(a, b) {
    return a + b
}

export function multiplicacion(a, b) {
    return a * b
}

export function potencia(a, b) {
    return a ** b
}

export function factorial(a) {
    let fac = 1
    for(i = 2; i <= a; i++) {
        fac *= i
    }
    return fac
}