// Ejercicio 9
// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para
// strings , si los datos introducidos son válidos, teniendo en cuenta lo siguiente.
//  - El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni guiones. Ejemplo: X0523821F.
//  - El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

let num, text, green;
let dniReg = /^[0-9]{8,8}[A-Za-z]$/gi
let nieReg = /^[XxTt][0-9]{7,7}[A-Za-z]$/gi

function miFuncion() {
    document.getElementById("text").className = " ";
    num = document.getElementById("dni").value.toUpperCase();
    if (num.match(dniReg) != null || num.match(nieReg) != null) {
        text = `El documento ${num} introducido es correcto.`;
        green = true;
    } else {
        text = `El documento ${num} introducido no es correcto.`;
        green = false;
    }
    let div = document.getElementById("text");
    green == true ? div.classList.add('green') : div.classList.add('red');
    div.innerHTML = text;
    event.preventDefault();
}
document.getElementById("button").addEventListener("click", miFuncion);