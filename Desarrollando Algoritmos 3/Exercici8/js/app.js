// Ejercicio 8
// Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de
// poker, por lo que:
//  - Habrá 2 arrays , uno con los palos (clubs, hearts , spades , diamonds ) y otro con las cartas
//  - El array de cartas incluirá las siguientes, cuyo valor está ordenado de mayor a menor:
//       ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2
// 
// Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario
// cuanto quiere apostar.
// Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la
// apuesta es válida, se generarán 2 cartas aleatorias, se mostrarán por consola, y se indicará una
// alerta “ You win !!”, You lose ” o Draw ”, según corresponda.
// Se sumará o restará el saldo en función del resultado.
// Al final de cada mano se le preguntará si quiere seguir jugando, siendo “ y ” la opción para seguir, y n ” la
// opción para retirarse.
// En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido
// beneficios o pérdidas, y se indica mediante una alerta: “ Betting benefits : XXX €”, mostrando las pérdidas
// con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo
// total: “Total balance: YYY €

let palos = ["clubs", "hearts", "spades", "diamonds"];
let cartas = ["ACE", "KING", "QUEEN JACK", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

let saldoInicial = 500;
