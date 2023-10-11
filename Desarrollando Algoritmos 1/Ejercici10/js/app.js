// Ejercicio 10
// Investiga el objeto Math , y genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados.
// Comprueba los resultados obtenidos y muestra por consola el ganador. Por ejemplo: “Player 1
// wins !”!”, o draw en caso de empate.

let max = 6;
let min = 1;
let win1 = 0;
let win2 = 0;
let draw = 0;

for (let index = 0; index < 1000; index++) {
    let num1 = Math.floor(Math.random()*(max - min))+min;
    let num2 = Math.floor(Math.random()*(max - min))+min;
    if (num1 > num2) {
        win1 = win1 + 1;
        console.log(`Player 1 = ${num1}. Player 2 = ${num2}. Win Player 1!`);
    } else if (num1 < num2) {
        win2 = win2 + 1;
        console.log(`Player 1 = ${num1}. Player 2 = ${num2}. Win Player 2!`);
    } else {
        draw = draw + 1;
        console.log(`Player 1 = ${num1}. Player 2 = ${num2}. Draw!`);
    }
}

console.log(`Player 1 win ${win1}. Representa el ${(win1/(win1+win2+draw)*100).toFixed(2)}%`);
console.log(`Player 2 win ${win2}. Representa el ${(win2/(win1+win2+draw)*100).toFixed(2)}%`);
console.log(`Draw ${draw}. Representa el ${(draw/(win1+win2+draw)*100).toFixed(2)}%`);
