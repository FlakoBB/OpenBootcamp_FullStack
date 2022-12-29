const f = document.getElementById("formulario")

console.log(f)

// espera a que ocurra algo
f.addEventListener("submit", evento => {
    console.log(evento) // muestra detalles del evento
    evento.preventDefault() // evita el comportamiento por defecto
})