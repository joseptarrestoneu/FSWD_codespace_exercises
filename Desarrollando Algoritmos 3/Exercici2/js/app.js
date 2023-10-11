// Ejercicio 2
// Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su
// nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo
// en cuenta los siguientes rangos:
//  - Entre las 5:00 y las 11:59 => “Good Morning, {userName}!"
//  - Entre las 12:00 y las 17:59 => “Good Afternoon, {userName}!"
//  - Entre las 18:00 y las 04:59 => “Good Evening, {userName}!"
// Los saludos deberán estar predefinidos en un objeto con el identificador "greeting"

// 1.Recoger hora del sistema
let systemTime =  new Date().toLocaleTimeString();

// 2. Establecer horas limites
let date1 = new Date(2023, 1, 1, 5, 0, 0).toLocaleTimeString();
let date2 = new Date(2023, 1, 1, 12, 0, 0).toLocaleTimeString();
let date3 = new Date(2023, 1, 1, 18, 0, 0).toLocaleTimeString();

// Recoger nombre del usuario
let userName = prompt("Introdueix el seu nom si us plau", "");

// Condicional mensaje segun hora del sistema
if (systemTime >= date1 && systemTime < date2) {
    alert(`Good Morning, ${userName}`);
} else if (systemTime >= date2 && systemTime < date3) {
    alert(`Good Afternoon, ${userName}`);
} else if (systemTime >= date3 && systemTime < date1) {
    alert(`Good Evening, ${userName}`);
} else {
    alert("Error");
};