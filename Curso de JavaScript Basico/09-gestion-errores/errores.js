const numDoble = numero => {
    if(typeof numero === "number") {
        return numero * 2
    }
    throw new Error("La variable no es un numero")
}

const numero = 5

try {
    console.log(numDoble(numero))
} catch (error) {
    console.error(error)
} finally {
    // este codigo se ejecuta simpre (exista o no un error)
    console.log("Hola soy el finally")
}