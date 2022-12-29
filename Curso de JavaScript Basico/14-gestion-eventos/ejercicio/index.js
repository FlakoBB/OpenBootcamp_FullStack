const btn1 = document.getElementById("btn-1")

btn1.addEventListener("click", () => {
    alert("Haz dado clic al boton 1")
})


// USANDO JQUERY

$(() => {
    $("#btn-2").click(() => {
        alert("Haz dado clic al boton 2 (JQuery)")
    })
})