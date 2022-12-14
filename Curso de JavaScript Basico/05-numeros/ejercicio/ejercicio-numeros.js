let alturaCM = 182
console.log(`Altura en centimetros: ${alturaCM}`)

let alturaM = 1.89
console.log(`Altura en metros: ${alturaM}`)

let pesoK = 80.319
console.log(`Peso en kilogramos: ${pesoK}`)

let AredondeoArriba = alturaM.toFixed(1)
console.log(`Altura redondeada hacia arriba: ${AredondeoArriba}`)

let AredondeoAbajo = alturaM.toPrecision(2)
console.log(`Altura redondeada hacia abajo: ${AredondeoAbajo}`)

let redondeoAbajo = pesoK.toPrecision(4)
console.log(`Peso redondeado hacia abajo: ${redondeoAbajo}`)

let comparacionMax = (Number.MAX_VALUE + 1) === Number.MAX_VALUE
console.log(`Son iguales: ${comparacionMax}`)