// Ejercicio 3
// Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), 
// y escriba en la consola "Hello World!" del color aleatorio generado.

let arrayHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let colorHex = "#";
let arrayColors = [];

for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * (arrayHex.length + 0) + 0);
        colorHex = colorHex + arrayHex[randomValue];
    }
    arrayColors[j] = colorHex;
    colorHex = "#"
}

arrayColors.map(element => {
    console.log('%cHello World!', `color: ${element};`)
})
