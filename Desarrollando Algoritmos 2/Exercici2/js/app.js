// Ejercicio 2
// Escribe un programa que muestre las letras del palíndromo "no lemon , no melon” en orden inverso.

let palabra = prompt("Introudeix una paraula","");

console.log(palabra.split("").reverse().reduce((acc, curreValue) => {return acc + curreValue}));