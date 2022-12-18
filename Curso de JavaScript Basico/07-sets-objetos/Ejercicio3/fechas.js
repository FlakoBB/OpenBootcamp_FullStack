const hoy = new Date()
console.log(`Hoy es: ${hoy}`)

const miNacimiento = new Date("October 30, 1999")
console.log(`Nacimiento: ${miNacimiento}`)

const hoyTarde = (hoy > miNacimiento)
console.log(`Hoy es mas tarde que mi nacimiento: ${hoyTarde}`)

const diaNacimiento = miNacimiento.getDate()
console.log(`Dia Nacimiento: ${diaNacimiento}`)

const mesNacimiento = miNacimiento.getMonth() + 1
console.log(`Mes Nacimiento: ${mesNacimiento}`)

const añoNacimiento = miNacimiento.getFullYear()
console.log(`Año Nacimienot: ${añoNacimiento}`)