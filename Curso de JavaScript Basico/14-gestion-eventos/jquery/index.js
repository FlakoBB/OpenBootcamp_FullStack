// $(selector).accion

// $("#titulo").hide()  // oculta el elemento con id="titulo"

// $(document).ready(() => {
$(() => {
    $(".hide-btn").click(() => {
        // $("#titulo").hide()
        $("#titulo").fadeOut()
    })

    $(".show-btn").click(() => {
        // $("#titulo").show()
        $("#titulo").fadeIn()
    })
})