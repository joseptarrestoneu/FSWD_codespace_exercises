// Ejercicio 5
// Escribe un programa que genera matrículas aleatorias, sabiendo que:
//      - Una matrícula válida debe estar compuesta por 4 números y 3 letras.
//      - Los números pueden ir desde 0000 hasta 9999
//      - Las letras pueden ir desde BBB hasta ZZZ
//      - No se permiten vocales
//      - No se permiten las consonantes Ñ ni Q
// El número de matrículas aleatorias será a petición del usuario.

// Al principio creia que con un RegEx para toda la matrícula pero lo he descartado
// /^[0-9]{4}(?:[B-DF-HJ-NPR-TV-Z]{3})/

// RegEx de la parte de la letras de la matrícula
let letterValid = /[B-DF-HJ-NPR-TV-Z]/
let matricula = ""

// Crear un array con las letras en ASCII 
let letters = Array.from({ length: 25 }, (_, index) => (index + 65) + 1);

// Preguntar sobre quantas matrículas quiere el usuario
rep = prompt("Cuantas matrículas diferentes quieres?", 1);

while (rep <= 0) {
    rep = prompt("Has de introducir un valor igual o superior a 1. Gracias!", 1);
} 

for (let i = 0; i < rep; i++) {
    matricula = "";
    // Crear 4 primeros números
    for (let i = 0; i < 4; i++) {
        let numero = Math.floor(Math.random() * (9 - 0) - 0);
        matricula = matricula + numero.toString()    
    }
    // Crear 3 ultimas parte con letras permitidas
    for (let i = 0; i < 3; i++) {
        let numero;
        do  {
            numero = Math.floor(Math.random() * (25 - 0) - 0);
            numero = String.fromCharCode(letters[numero])
        } while (numero.match(letterValid) == null);
        matricula = matricula + numero.toString()
    }
    console.log(matricula);

}