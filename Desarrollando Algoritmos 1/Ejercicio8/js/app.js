// Ejercicio 8
// Escribe un programa que pregunte al usuario 2 números y la operación a realizar (suma, resta, multi,
// divide). A continuación, mostrar el resultado de la operación requerida por consola.

let num1 = 0;
let num2 = 0;

do {
    num1 = prompt("Escribe el primer número", 0);
} while (isNaN(num1));

do {
    num2 = prompt("Escribe el segundo número", 0);
} while (isNaN(num2));

num1 = parseInt(num1);    
num2 = parseInt(num2);

let op = prompt("Que operación quiere hacer? (sumar, restar, multiplicar o dividir", "");

switch (op) {
    case "sumar":
        console.log(`El resultado de ${op} ${num1} y ${num2} es ${num1+num2}.`);
        break;
    case "restar":
        console.log(`El resultado de ${op} ${num1} y ${num2} es ${num1-num2}.`);
        break;
    case "multiplicar":
        console.log(`El resultado de ${op} ${num1} y ${num2} es ${num1*num2}.`);
        break;
    case "dividir":
        if (num2 == 0) {
            console.log("División por 0 no esta permitida.");
        } else {
            console.log(`El resultado de ${op} ${num1} y ${num2} es ${num1/num2}.`);
        };
        break;
    default:
        console.log("No se puede hacer la operació requerida.");
}