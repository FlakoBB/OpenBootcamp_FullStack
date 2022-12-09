// Lista o arreglo (array)
const lista = ["Flako", 10, 30, "BB"]

console.log(lista); // ["Flako", 10, 30, "BB"]
console.log(lista[1]); // 10

lista[0] = "Joseph Ryan";
console.log(lista); // ["Joseph Ryan", 10, 30, "BB"]


// Objeto
const celular = {
    altura: 12,
    anchura: 5,
    tarjeta: {
        SIM: "telcel",
        RAM: 6,
        ROM: 128
    }
}

console.log(celular.anchura); // 5

celular.tarjeta.SIM = "AT&T"

console.log(celular.tarjeta); // { SIM: "AT&T", RAM: 6, ROM: 128}


// Fechas
// Libreria de apoyo: Moment.js

const ahora = new Date();
console.log(ahora); // Fecha y hora actual

const fecha_milis = new Date(10000); // Utilizando milisegundos
console.log(fecha_milis); // La fecha 0 (01-enero-1970) más los milisegundos indicados

const fecha_cadena = new Date("october 30 1999");
console.log(fecha_cadena);

const fecha_valores = new Date(2023, 0, 26);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // Los meses se contabilizan iniciando en Enero:0
const año = ahora.getFullYear();

console.log(dia, mes, año);