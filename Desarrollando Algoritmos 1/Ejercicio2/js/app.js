// Ejercicio 2
// Escribe un programa que le pregunte al usuario un mes, y le indique cuantos días tiene ese mes. En
// caso de error, indicarle el mensaje: That’s not a real month

let today = new Date;
let month;
let year;
let numMonth = -1;

do {
    month = prompt("Puedes introducir un mes por favor?","").toLowerCase();
    switch (month) {
        case "enero":
            numMonth = 0;
            break;
        case "febrero":
            numMonth = 1;
            break;
        case "marzo":
            numMonth = 2;
            break;
        case "abril":
            numMonth = 3;
            break;
        case "mayo":
            numMonth = 4;
            break;
        case "junio":
            numMonth = 5;
            break;
        case "julio":
            numMonth = 6;
            break;
        case "agosto":
            numMonth = 7;
            break;
        case "setiembre":
            numMonth = 8;
            break;
        case "octubre":
            numMonth = 9;
            break;
        case "noviembre":
            numMonth = 10;
            break;
        case "diciembre":
            numMonth = 11;
            break;
        default:
            alert("Introduzca el mes correctamente por favor.")
    }    
} while (numMonth < 0)

do {
    year = prompt("De que año quiere comprovar la fecha?","Año");
} while (isNaN(year))

let lastDayActualMonth = new Date(year, numMonth+1,0);
alert(`El mes de ${month} de este año ${year} tiene ${lastDayActualMonth.getDate()} dias.`);