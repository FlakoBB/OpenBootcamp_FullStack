// Ejercicio usando los metodos de las cadenas
let nombre = "Joseph"
console.log(`Nombre: ${nombre}`)

let apellido = "Ryan"
console.log(`Apellido: ${apellido}`)

let estudiante = `${nombre} ${apellido}`
console.log(`Estuduante: ${estudiante}`)

let estudianteMayus = estudiante.toUpperCase()
console.log(`EstuduanteMayus: ${estudianteMayus}`)

let estudianteMinus = estudiante.toLowerCase()
console.log(`EstuduanteMinus: ${estudianteMinus}`)

let longitud = estudiante.length
console.log(`Longitud: ${longitud}`)

let primeraNombre = nombre[0]
console.log(`Primera letra del nombre: ${primeraNombre}`)

let primeraApellido = apellido.charAt(0)
console.log(`primera letra del apellido: ${primeraApellido}`)

let noEspacios = estudiante.replace(" ", "")
console.log(`Estudiante sin espacios: ${noEspacios}`)

let estaNombre = estudiante.includes(nombre)
console.log(`¿El nombre ${nombre} esta en la cadena?: ${estaNombre}`)