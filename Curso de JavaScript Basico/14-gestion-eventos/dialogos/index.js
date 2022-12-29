// const boton = document.getElementById("#btn")
const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    // alert("Se a hecho click")

    confirm("¿estas de acuerdo?")
        ? console.log("OK")
        : console.log("NO")
})

const botn2 = document.querySelector("#btn2")

botn2.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?")

    if (nombre) {
        console.log("Hola " + nombre)
    } else {
        console.log("Dime tu nombre")
    }
})

const lista = [
    {nombre: "Flako", edad: 23},
    {nombre: "Jose", edad: 25},
    {nombre: "Zury", edad: 24},
    {nombre: "Andie", edad: 23},
    {nombre: "Viri", edad: 24},
]

console.table(lista)