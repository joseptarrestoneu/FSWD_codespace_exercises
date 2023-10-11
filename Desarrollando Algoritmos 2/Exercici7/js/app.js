// Ejercicio - Playing games
// Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable.
// A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El
// programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: You
// win !”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again ”. Si agota los intentos y
// no ha conseguido acertar, mostramos el mensaje: Sorry , Good luck in love

let randomNumber = (Math.random() * (10 - 0) + 0).toFixed();

for (let counter = 0; counter < 3 ; counter++) {
    let userNumber = prompt(`Quin número creus que ha sortit? Tens ${counter} intens.`);
  
    if (randomNumber == userNumber) {
        console.log("You win!");
        break;
    } else {
        console.log("Try it again");
    }
}
console.log(`Sorry , Good luck in love. The random number was ${randomNumber}.`);
