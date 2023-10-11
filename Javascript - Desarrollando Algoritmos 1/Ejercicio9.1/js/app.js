// Ejercicio 9
// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para
// strings , si los datos introducidos son válidos, teniendo en cuenta lo siguiente.
//  - El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni guiones. Ejemplo: X0523821F.
//  - El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

// OPCIO 1 - AMB PROMPT
// let num = prompt("Introduzca su DNI o NIE por favor");
// let count = 0;
// if (num.length == 9) {
//     if (num.charAt(0) == "X" || num.charAt(0) == "T") {
//         for (let i = 1; i <= 7; i++) {
//             if (!isNaN(num.charAt(i))) {
//                 count++;
//             }
//         }
//         if (count == 7) {
//             if (num.charAt(num.length-1) >= 1 || num.charAt(num.length-1) <= 9) {
//                 console.log(`El NIE ${num} no es correcto. El último caracter ha de ser una letra.`)   
//             } else {
//                 console.log(`El NIE ${num} es correcto.`);
//             }
//         } else {
//             console.log(`El NIE ${num} no es correcto. No hay suficientes carácteres introducidos entre la primera y la última letra.`)
//         }
//     } else if (!isNaN(num.charAt(0))) {
//         for (let i = 1; i <= 7; i++) {
//             if (!isNaN(num.charAt(i))) {
//                 count++;
//             }
//         }
//         if (count == 7) { 
//             if (num.charAt(num.length-1) >= 1 || num.charAt(num.length-1) <= 9) {
//                 console.log(`El DNI ${num} introducido no es correcto.`);    
//             } else {
//                 console.log(`El DNI ${num} es correcto.`); 
//             }        
//         } else {
//             console.log(`El DNI ${num} no es correcto. No hay suficientes carácteres introducidos entre la primera y la última letra.`)
//         } 
//     } else if (typeof(num.charAt(0)) == "string") {
//         console.log("No has introducido un NIE correcto.");
//     }
// } else {
//     console.log("No has introducido un DNI o NIE correcto.");
// }

// OPCIO 2 - AMB FORM DEL DOM
let num;
let text;
let green;

function miFuncion() {
    document.getElementById("text").className = " ";
    let count = 0;
    num = document.getElementById("dni").value.toUpperCase();
    if (num.length == 9) {
        if (num.charAt(0) == "X" || num.charAt(0) == "T") {
            for (let i = 1; i <= 7; i++) {
                if (!isNaN(num.charAt(i))) {
                    count++;
                }
            }
            if (count == 7) {
                if (num.charAt(num.length-1) >= 1 || num.charAt(num.length-1) <= 9) { 
                    text = `El NIE ${num} no es correcto. El último caracter ha de ser una letra.`; 
                    green = false; 
                } else {
                    text = `El NIE ${num} es correcto.`;
                    green = true;  
                }
            } else {
                text = `El NIE ${num} no es correcto. No hay suficientes carácteres introducidos entre la primera y la última letra.`;
                green = false;
            }
        } else if (!isNaN(num.charAt(0))) {
            for (let i = 1; i <= 7; i++) {
                if (!isNaN(num.charAt(i))) {
                    count++;
                }
            }
            if (count == 7) { 
                if (num.charAt(num.length-1) >= 1 || num.charAt(num.length-1) <= 9) {
                    text = `El DNI ${num} no es correcto. El último carácter ha de ser una letra.`;
                    green = false;
                } else {
                    text = `El DNI ${num} es correcto.`;
                    green = true;
                }        
            } else {
                text = `El DNI ${num} no es correcto. No hay suficientes carácteres introducidos entre la primera y la última letra.`;
                green = false;
            } 
        } else if (typeof(num.charAt(0)) == "string") {
            text = "No has introducido un NIE correcto.";
            green = false;
        }
    } else {
        text = "No has introducido un DNI o NIE correcto.";
        green = false;
    }
    let div = document.getElementById("text");
    if (green == true) {
        div.classList.add('green');
    } else {
        div.classList.add('red');
    }
    div.innerHTML = text;
    event.preventDefault();
}

document.getElementById("button").addEventListener("click", miFuncion);