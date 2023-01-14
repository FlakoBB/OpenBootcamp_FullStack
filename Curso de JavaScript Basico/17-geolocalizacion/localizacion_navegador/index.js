let posicion, map, marcador

function initMap() {
    // console.log("mapa iniciado")
    posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marcador = new google.maps.Marker({
        position: posicion,
        map,
        title: "Uluru"
    })

    posicionActual()
}

function posicionActual() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const opciones = {timeout: 60000}
        const watchPosicion = geoLoc.watchPosition(centraMapa, onError, opciones)
    } else {
        alert("Tu navegador ni permite la geolocalizacion")
    }
}

function centraMapa(posicion) {
    const nuevaPos = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    }

    marcador.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("ha habido un error")
    console.log(error)
}