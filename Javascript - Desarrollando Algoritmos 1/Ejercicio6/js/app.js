// Ejercicio 6
// Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos
// introducidos con los siguientes, que deberán estar guardados en variables:
//  - email: tolkien@lordofrings.com
//  - password : aNBR6ZeWPY

let userMail;
let userPassword;
let text;
let correct;

// OPACION 1 - CON UN PROMPT
// let userMail = prompt("Introduzca su mail por favor", "");
// let userPassword = prompt("Introduzca su password por favor", "");

// OPCION 2 - COGIENDO ELEMENTOS DEL DOM DE UN FORM
function miFuncion() {
    document.getElementById("text").className = " ";
    userMail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    if (userMail == "tolkien@lordofrings.com" && userPassword == "aNBR6ZeWPY") {
        text = "Welcome Mr. Tolkien";
        correct = "yes";
    } else {
        text = "Wrong password or email";
        correct = "no";
    }
    // Comprovación
    console.log(text);
    console.log(userMail);
    console.log(userPassword);
    // Opcion 1 - Creando multiples elementos div en en DOM uno detras de otro
    // let div = document.createElement('div');
    // div.innerHTML = text;
    // document.querySelector(".text").append(div);

    // Opcion 2 - Modificando el elemento div de el DOM (siempre el mismo)
    let div = document.getElementById("text");
    if (correct == "yes") {
        div.classList.add('green'); // Afegir class "green" al div
    } else {
        div.classList.add('red'); // Afegir class "red" al div
    }
    div.innerHTML = text;
    // Cancelar el evento y lo para
    event.preventDefault();
}

document.getElementById("button").addEventListener("click", miFuncion);