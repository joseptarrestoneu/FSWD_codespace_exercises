// Ejercicio 4
// Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se
// determina por la siguiente tabla:
//
//      Resto   | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
//      Letra   | T   | R   | W   | A   | G   | M   | Y   | F   | P   | D   | X   | B   |
//
//      Resto   | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
//      Letra   | N   | J   | Z   | S   | Q   | V   | H   | L   | C   | K   | E   |
//
// Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido,
// lanzando una alerta “Valid DNI” o “The data entered is wrong".
// **Bonus : añade un programa que genera DNI válidos aleatorios.

let restCode = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

let num, text, green;
let dniReg = /^[0-9]{8,8}[A-Za-z]$/gi

function miFuncion() {
    document.getElementById("text").className = " ";
    num = document.getElementById("dni").value.toUpperCase();
    // Guardem número del DNI
    let numDNI = num.slice(0,8);
    // Guardem la lletra del DNI
    let letterDNI = num[num.length - 1];
    // Fem l'operació per saber el resto
    let restDNI = numDNI % 23;
    // Guardem la lletra que li tocaria segons el resto
    let letraDNI = restCode[restDNI];
    
    if (num.match(dniReg) != null && letterDNI == letraDNI) {
        text = `El document ${num} introduit és correcte.`;
        green = true;
    } else {
        text = `El document ${num} introduit no és correcte.`;
        green = false;
    }
    let div = document.getElementById("text");
    green == true ? div.classList.add('green') : div.classList.add('red');
    div.innerHTML = text;
    event.preventDefault();
}
document.getElementById("button").addEventListener("click", miFuncion);

