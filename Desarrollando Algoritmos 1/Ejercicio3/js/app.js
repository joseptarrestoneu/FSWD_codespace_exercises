// Ejercicio 3
// Escribe un programa que pregunte la temperatura exterior al usuario. Si la temperatura está por
// debajo de 15 grados, lanzar una alerta con el mensaje: Warm up”. En caso de que la temperatura
// sea entre 15 grados y 25, lanzar una alerta con el mensaje: Enjoy the weather !”. En caso de que la
// temperatura sea de más de 25 grados, lanzar la alerta con el mensaje: Cool down

let temp;
do {
    temp = prompt("Cual es la temperatura exterior?", 0);
    if (temp == "" || isNaN(temp)) {
        alert("Introduzca una temperatura correcta por favor.")
    }
} while (temp == "" || isNaN(temp));

console.log(typeof(temp));


if (temp < 15) {
    alert("Warm up");
} else if (temp >= 15 && temp <= 25 ) {
    alert("Enjoy the weather!");
} else {
    alert("Cool down");
}