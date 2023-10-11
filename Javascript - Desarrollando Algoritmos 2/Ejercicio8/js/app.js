// Ejercicio 8 - Password Generator
// Investigando como obtener caracteres a partir de valores ASCII, vamos a crear un generador de contraseñas.
// En primer lugar, pregunta al usuario cuantos caracteres tendrá la contraseña deseada, (mínimo 8 y máximo 16).
// A continuación, pregunta si quiere incluir, paso a paso, cada uno de los siguientes caracteres: minúsculas, mayúsculas, números y símbolos.
// En caso de que el usuario diga que no a las 4 posibilidades, la contraseña estará hecha en minúsculas.
// Cada carácter será generado con la siguiente fórmula:
//    - Math.floor(Math.random () max min + min
// En una función que devuelva números enteros aleatorios , y reciba 2 parámetros
// La contraseña generada debe ser mostrada con alert()
// ** Bonus opcional: asegura que la contraseña no contiene 2 caracteres iguales seguidos.


let numberItemsPassword = prompt("Cuantos carácteres tendrá la contraseña (entre 8 y 16)?");
let includeLowerCases = prompt("Quieres incluir minúsculas (yes | no)?", "no"); // ASCII entre el número 97 i 122
let includeUpperCases = prompt("Quieres incluir mayúsculas (yes | no)?", "no"); // ASCII entre el número 65 i 90
let includeNumbers = prompt("Quieres incluir números (yes | no)?", "no"); // ASCII entre el número 48 i 57
let includeSymbols = prompt("Quieres incluir símbolos (yes | no)?", "no"); // ASCII entre el número 33 i 47

// Inicio proceso
console.time('Loop');

let lowerCasesTable = Array.from({ length: 26 }, (_, index) => (index + 96) + 1);
let upperCasesTable = Array.from({ length: 26 }, (_, index) => (index + 64) + 1);
let numbersTable = Array.from({ length: 10 }, (_, index) => (index + 47) + 1);
let symbolsTable = Array.from({ length: 15 }, (_, index) => (index + 32) + 1);

lowerCasesTable.map((element, index) => {
    lowerCasesTable[index] = String.fromCharCode(element);
})
upperCasesTable.map((element, index) => {
    upperCasesTable[index] = String.fromCharCode(element);
})
numbersTable.map((element, index) => {
    numbersTable[index] = String.fromCharCode(element);
})
symbolsTable.map((element, index) => {
    symbolsTable[index] = String.fromCharCode(element);
})

let passwordTable = [];

if (includeLowerCases == "yes") {
    passwordTable = [...passwordTable, ...lowerCasesTable];
}
if (includeUpperCases == "yes") {
    passwordTable = [...passwordTable, ...upperCasesTable];
}
if (includeNumbers == "yes") {
    passwordTable = [...passwordTable, ...numbersTable];
}
if (includeSymbols == "yes") {
    passwordTable = [...passwordTable, ...symbolsTable];
}

let passwordArray = [];

for (let i = 0; i < numberItemsPassword; i++) {
    newItem = Math.floor(Math.random () * (passwordTable.length - 0) + 0);
    passwordArray = [...passwordArray, passwordTable[newItem]];
}

let password = passwordArray.join("");
console.log(password);
// Final proceso

console.timeEnd('Loop');