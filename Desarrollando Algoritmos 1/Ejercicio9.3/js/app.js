// Ejercicio 9
// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para
// strings , si los datos introducidos son válidos, teniendo en cuenta lo siguiente.
//  - El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni guiones. Ejemplo: X0523821F.
//  - El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

let documento = prompt('Please, enter your DNI i NIE').toLowerCase();
let isDNI = true;
let validDocument = true;

if (documento.charCodeAt(0) == 116 || documento.charCodeAt(0) == 120) {
    isDNI = false;
}
if (isDNI && validDocument) {
    for ( let i = 0; i < documento.length -1; i++ ) {
        if (i <= 7) {
            if (documento.charCodeAt(i) < 48 || documento.charCodeAt(i) > 57 ) {
                validDocument = false;
            }
        } else {
            if (documento.charCodeAt(i) < 97 || documento.charCodeAt(i) > 122 ) {
                validDocument = false;
            }
        }
    }
} else if (validDocument) {
    for ( let i = 1; i < document.length -1; index++ ) {
        if (i <= 7) {
            if (document.charCodeAt(0) < 48 || document.charCodeAt(0) > 57 ) {
                validDocument = false;
            }
        } else {
            if (document.charCodeAt(0) < 97 || document.charCodeAt(0) > 122 ) {
                validDocument = false;
            }
        }
    }
} else {
    console.log("Not a valid Document");
}

if (validDocument) {
    console.log("It's a valid DNI o NIE");
} else {
    console.log("Not a valid DNI");
}