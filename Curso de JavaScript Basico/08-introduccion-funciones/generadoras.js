function* generaId() {
    let id = 0;
    while(true) {
        id++
        if(id === 10){
            return id
        }
        yield id // devuelve el valor actual y lo mantiene hasta que se vuelve a invocar la funcion
    }
}

const gen = generaId() // guarda los datos de la funcion en un objeto

console.log(gen.next()) // .next() -> hace que continue la funcion en donde se ha mantenido esperando
console.log(gen.next().value) // al ser un objeto podemos acceder drecto al valor que devuelve la funcion
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())