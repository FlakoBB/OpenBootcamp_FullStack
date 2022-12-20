// Para importar con el modelo ES6 debemos iniciar un proycto con npm y configurar type:"module"
// importar elementos especificos
// import {suma, multiplicacion} from './modulos/mates'
// importar todos los elementos
import * as modulosMates from './modulos/mates.js'
// importar elementos por defecto y constantes
import libro, {autor} from './modulos/literatura.js'

// usar modulos
const suma = modulosMates.suma(10, 20)
console.log(suma)

const titulo = libro()
console.log(titulo)

console.log(autor)