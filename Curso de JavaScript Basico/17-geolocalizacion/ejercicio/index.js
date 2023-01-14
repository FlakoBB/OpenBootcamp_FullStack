
function initMap() {
    const lugar1 = {
        lat: 19.135242,
        lng: -155.504923
    }
    const lugar2 = {
        lat: 69.650067,
        lng: 18.950979
    }
    const lugar3 = {
        lat: 50.919532,
        lng: 6.949004
    }
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {lat: 50, lng: -60}
    })

    const blackSand = new google.maps.Marker({
        position: lugar1,
        map,
        title: "Black Sand Beach"
    })

    const tromso = new google.maps.Marker({
        position: lugar2,
        map,
        title: "Tromso"
    })

    const colonia = new google.maps.Marker({
        position: lugar3,
        map,
        title: "Colonia, Alemania"
    })
}