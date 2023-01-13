const parrafos = document.querySelectorAll(".parrafo") // Obtenemos todos los elementos con la clase parrafo
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => { // Aplicamos la funcion a cada elemento
    parrafo.addEventListener("dragstart", event => { // indicamos el evento (inicio de arrastre)
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("drag") // agregamos una nueva clase al elemento
        event.dataTransfer.setData("id", parrafo.id) // guardamos el id del elemento arrastrado
    })
})

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragend", () => { // el evento es cuando dejamos de arrastrar el elemento
        // console.log("Deje de arrastrar")
        parrafo.classList.remove("drag") // quitamos la clase indicada al elemento
    })
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => { // dragover reconoce que se esta arrastrando un elemento sobre él
        event.preventDefault()
    })

    seccion.addEventListener("drop", event => { // drop reconoce que se ha soltado el elemento
        const id_parrafo = event.dataTransfer.getData("id") // obtenemos el id del elemento
        const parrafo = document.getElementById(id_parrafo) // obtenemos el elemento con el id
        seccion.appendChild(parrafo) // colocamos el elemento como un hijo de la seccion
    })
})

// checar la documentacion de dataTransfer = https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer