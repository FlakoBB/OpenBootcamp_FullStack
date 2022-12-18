const misDatos = {
    nombre: "Flako",
    apellido: "BB",
    edad: 23,
    altura: 1.82,
    isDeveloper: true
}

const miEdad = misDatos.edad
console.log(`Mi edad: ${miEdad}`)

const datos = [
    misDatos,
    {
        nombre: "Jose",
        apellido: "Jurado",
        edad: 25,
        altura: 1.78,
        isDeveloper: false
    },
    {
        nombre: "Zury",
        apellido: "Escribano",
        edad: 24,
        altura: 1.72,
        isDeveloper: false
    }
]
console.log("Datos en Desorden")
console.log(datos)

const datosOrdenados = datos.sort((a, b) => a.edad - b.edad)
console.log("Datos Ordenados")
console.log(datosOrdenados)