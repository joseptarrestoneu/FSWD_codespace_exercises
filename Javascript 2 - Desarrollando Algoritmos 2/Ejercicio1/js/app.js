// Ejercicio 1
// Escribe un programa para contar las letras en la palabra:
// palindrome , mostrándolas una a una

let palabra = prompt("Introduce una palabra","");

palabra.split("").map((element, index) => {
    console.log(index + 1, element)
})