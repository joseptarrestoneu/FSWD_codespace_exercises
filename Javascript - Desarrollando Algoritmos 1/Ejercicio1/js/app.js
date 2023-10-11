// Ejercicio 1
// Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el
// mes real del sistema.

let today = new Date;
let lastDayActualMonth = new Date(today.getFullYear(), today.getMonth()+1,0);
console.log("El mes actual tiene ",lastDayActualMonth.getDate()," dias.");