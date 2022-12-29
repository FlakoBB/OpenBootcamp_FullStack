// Almacenamiento Local

localStorage.setItem("nombre", "Flako")

console.log(localStorage.getItem("nombre"))


// Almacenamiento de sesion

sessionStorage.setItem("persona", JSON.stringify({nombre: "jose", apellido: "perez"}))


// Cookies

document.cookie = "nombreCookie=FlakoBBCookie"

document.cookie = "cookieConCaducidad=valorDeLaCookie;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)