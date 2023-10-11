// Ejercicio 1
// Escribe un programa para contar las letras en la palabra:
// palindrome , mostrándolas una a una

let palabra = prompt("Introudeix una paraula","");

palabra.split("").map((element) => {
    console.log(element)
})

// console.log(palabra.split("").reverse().reduce((acc, curreValue) => {return acc + curreValue}));
