// Ejercicio 7
// Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array.
// A continuación filtra todos los números impares, ordenando los pares de mayor a menor.

// Funcio per ordenar números
function compare(value1, value2) {
    return value1 - value2;
} 

numArray = [];

for (let i = 0; i < 100; i++) {
    numArray = [...numArray, Math.floor(Math.random() * (500 - 0) + 0)]; 
}

peersArray = numArray.filter(element => element % 2 == 0);
peersArray.sort(compare).reverse();

console.log(peersArray);
