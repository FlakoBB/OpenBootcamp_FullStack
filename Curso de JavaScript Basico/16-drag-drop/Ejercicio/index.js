const piezas = document.querySelectorAll(".pieza")
const secciones = document.querySelectorAll(".seccion")

piezas.forEach(pieza => {
    pieza.addEventListener("dragstart", event => {
        event.dataTransfer.setData("id", pieza.id)
        pieza.classList.add("dragg")
    })

    pieza.addEventListener("dragend", () => {
        pieza.classList.remove("dragg")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
    })

    seccion.addEventListener("drop", event => {
        const id_pieza = event.dataTransfer.getData("id")
        const pieza = document.getElementById(id_pieza)
        // seccion.appendChild(pieza)
        if (seccion.id !== "papelera") {
            seccion.appendChild(pieza)
        } else {
            seccion.appendChild(pieza)
            seccion.removeChild(pieza)
        }
    })
})