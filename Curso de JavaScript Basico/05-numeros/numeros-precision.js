let a = 10

let b = 0.1

let c = 0.2

console.log(b + c) // nos devolvera 0.30000000000000004 devido a la forma en que JS trata a las variables

// truco para obtener resultados mas "reales"
console.log(Math.round((b + c) * 100)/100) // ahora si devolvera 0.3