const hTexto = document.getElementById("h-texto")

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto (nuevoTexto, nuevoColor) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: nuevoColor
        }
    })
    hTexto.dispatchEvent(evento)
}