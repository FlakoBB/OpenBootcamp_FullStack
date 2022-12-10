
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (i === 3) {
        continue; // regresa al for ignorando las lineas siguientes
    }

    console.log(i);

    if (i >= 5) {
        break; // rompe el bucle sin importar que la condicion pudira cumplirse
    }
}