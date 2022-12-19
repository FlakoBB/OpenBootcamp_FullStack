function miAsincrona() {
    // normalmente llama a una base de datos externa
    // puede generar algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Ejecucion correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Siempre se ejecuta"))