// funcion sin parametros que devuelva siempre true
function siempreTrue() {
    return true
}

console.log(siempreTrue())



// funcion asincrona con setTimeOut
const funAsincrona = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola soy una promesa")
        }, 5000)
    })
}

funAsincrona()
.then(contenido => console.log(contenido))



// funcion generadora de indices pares
function* indicePar(){
    let id = 0
    while(true){
        id++
        if(id%2 === 0) {
            yield id
        }
    }
}

const indice = indicePar()

let contador = 0

while(contador < 10){
    console.log(indice.next().value)
    contador++
}