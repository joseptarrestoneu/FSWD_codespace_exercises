// Ejercicio 2
// Escribe un programa que muestre las letras del palíndromo "no lemon , no melon” en orden inverso.

const ejercicio2 = () => {
    let palabra = prompt("Introduce una palabra","");
    // Opcio 1:
    console.log(palabra.split("").reverse());
    // Opcio 2:
    console.log([...palabra].reverse().join(""));
};

ejercicio2()