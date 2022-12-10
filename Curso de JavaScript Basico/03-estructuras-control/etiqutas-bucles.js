let i = 0
let uni = "Hola"

bucleUno: while (i < 10) {
    console.log(`ff ${uni}`)
    bucleDos: while (i >= 4) {
        console.log("entré al segundo bucle")
        if (i === 6) {
            break bucleDos;
        }
        i++;
    }
    i++;
}