// obtener fecha actual
const fechaActual = new Date()
console.log(fechaActual)


// formas de definir fechas
// Date(año, mes(-1), dia, horas, minutos, segundos, milisegundos)
const fecha1 = new Date(1999, 9, 30, 1, 45, 33, 100)
console.log(fecha1)

// con milisegundos
const fecha2 = new Date(30000000) // fecha 0 (01-ene-1970) mas/menos los milisegundos indicados
console.log(fecha2)

// con Strings
const fecha3 = new Date("October 30, 2020 10:30")
console.log(fecha3)


// comparar fechas
// antes < despues
console.log(fecha3 > fecha1) // fecha3 es mas reciente que fecha1

// iguales
const fecha4 = fecha3
// forma incorrecta (== | ===)
console.log(fecha4 == fecha3) // así no se pueden comparar las fechas

// forma correcta .getTime()
console.log(fecha4.getTime() === fecha3.getTime()) // con .getTime() compara el total de milisegundos desde la hora cero hasta la fecha indicada


// obtener partes especificas de la fecha
// dia .getDate()
console.log(fecha1.getDate())
// mes .getMonth()
console.log(fecha1.getMonth() + 1) // +1 porque en el objeto enero es 0 y diciembre es 11
// año
console.log(fecha1.getFullYear())


// obtener cadena de fecha .toLocaleDateString()
console.log(fecha3.toLocaleDateString('en-GB')) // .toLocaleDateString('formato')