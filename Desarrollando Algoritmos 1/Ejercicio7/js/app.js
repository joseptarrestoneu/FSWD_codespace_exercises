// Ejercicio 7
// Mediante una estructura switch, escribe un programa para convertir euros a:
//  - Dólar americano
//  - Yen Japonés
//  - Libra esterlina
//  - Franco suizo
// Y muestre por consola el siguiente resultado: XXX euros equivalen a YYY dólares americanos, ZZZ
// yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template literal para mostrar el resultado.
// ** Buscar el valor al cambio en Google**

let euros = prompt("Introduzca la cantidad de euros a convertir", 0);
let divisa = prompt("Introduzca la divisa a la cual quiere convertir la moneda: 1 = dólares, 2 = yenes, 3 = libras, 4 = francos suizos", 0);
let dolars = (euros * 0.94).toFixed(2);
let yen = (euros * 149.37).toFixed(2);
let libra = (euros * 0.82).toFixed(2);
let franc = (euros * 0.91).toFixed(2);

switch(divisa) {
    case "1":
        console.log(`${euros} euros equivalen a ${dolars} dólares americanos.`);
        break;
    case "2":
        console.log(`${euros} euros equivalen a ${yen} yenes japoneses.`);
        break;
    case "3":
        console.log(`${euros} euros equivalen a ${libra} libras esterlinas.`);
        break;
    case "4":
        console.log(`${euros} euros equivalen a ${franc} francos suizos.`);
        break;
    default:
        console.log(`No has introducido un valor correcto.`)
}