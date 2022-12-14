// operaciones
let a = 3.3
let b = 4.4

// Suma (+)
console.log(a + b)

// Resta (-)
console.log(a - b)

// Multiplicacion (*)
console.log(a * b)

// Divicion (/)
console.log(a / b)


// convertir un numero a string
let num_string = b.toString()
console.log("El numero " + num_string + " ahora en una cadena")


// redondeo denumeros
let c = 3.5
let d = c + 2.4

console.log("d: " + d)

// .toFixed - limita la cantidad de decimales, ademas convierte el numero a string
console.log(d.toFixed(4))

// .toPrecision - limita el numero de cifras significativas y convierte el nuemero a string
let e = 30.101999
console.log(e.toPrecision(4)) // 30.10