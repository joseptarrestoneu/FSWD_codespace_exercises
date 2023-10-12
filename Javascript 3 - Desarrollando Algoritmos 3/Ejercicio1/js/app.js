// Ejercicio 1
// Escribe un programa que pregunte al usuario los límites máximo y mínimo, y genere un array de 20
// números aleatorios entre esos valores, ambos incluidos. Luego mostrará el valor más alto y el más
// bajo dentro del array, con el siguiente formato (por consola):
//  - min value : nnn
//  - max value : mmm

let minValue = parseInt(prompt("Introduce el valor mínimo", 0));
let maxValue = parseInt(prompt("Introduce el valor máximo", 0));
let valor = [];

for (let index = 0; index < 20; index++) {
    randomValue = Math.floor(Math.random() * (maxValue - minValue) + minValue );
    valor = [...valor, randomValue];
};

// Funció per ordenar array de números
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

valor.sort(compare);
console.log(`min value: ${valor[0]}`);
console.log(`max value: ${valor[valor.length - 1]}`);

