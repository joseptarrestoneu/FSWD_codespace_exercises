// Ejercicio 5
// Teniendo en cuenta las siguientes temperaturas:
//  - Absolute Zero 273.15 C
//  - Freezing point 0 C
//  - Body Temperature 37 C
//  - Boiling point 100 C
// Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
// switch). ** Buscar la fórmula en Google

let absoluteZero = -273.15;
let freezingPoint= 0;
let bodyTemperature = 37;
let boilingPoint = 100;
let div = document.createElement('div');
let text = ""
let temp = prompt("Que temperatura quieres transformar aFahrenheit? Escribe 1 para 'absoluteZero', 2 para 'freezingPoint', 3 para 'bodyTemperature' o 4 para 'boilingPoint'");
switch (temp) {
    case "1":
        text = ((absoluteZero * 9 / 5) + 32).toFixed(2);
        div.innerHTML = text;
        document.querySelector(".text").append(div);
        console.log(text);
        break;
    case "2":
        div =document.createElement('div');
        text = ((freezingPoint * 9 / 5) + 32).toFixed(2);
        div.innerHTML = text;
        document.querySelector(".text").append(div);
        console.log(text);
        break;
    case "3":
        div =document.createElement('div');
        text = ((bodyTemperature * 9 / 5) + 32).toFixed(2);
        div.innerHTML = text;
        document.querySelector(".text").append(div);
        console.log(text);
        break;
    case "4":
        div =document.createElement('div');
        text = ((boilingPoint * 9 / 5) + 32).toFixed(2);
        div.innerHTML = text;
        document.querySelector(".text").append(div);
        console.log(text);
        break;
    default:
        div =document.createElement('div');
        div.innerHTML = "No has introducido un número correcto.";
        document.querySelector(".text").append(div);
        console.log("No has introducido un número correcto.");
}