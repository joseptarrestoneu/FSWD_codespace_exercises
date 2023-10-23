//Ejercicio 5

let decision;
let options = {
  replaceChars: false, //Booleano
  capitalize: false, //Booleano
  replaceSpaces: false, //Booleano
};

let resultPrompt;
let result = []; //Resultado del prompt
let loremText = "Lorem ipsum dolor sit amet";
let startTime = performance.now();

resultPrompt = prompt("Replace chars by signs");
resultPrompt = resultPrompt.toLowerCase();
comprobacionRespuesta(resultPrompt);
resultPrompt = prompt("Capitalize");
resultPrompt = resultPrompt.toLowerCase();
comprobacionRespuesta(resultPrompt);
resultPrompt = prompt("Replace Space with commas");
resultPrompt = resultPrompt.toLowerCase();
comprobacionRespuesta(resultPrompt);

options.replaceChars = result[0];
options.capitalize = result[1];
options.replaceSpaces = result[2];

do {
    if (options.replaceChars == true) {
        cambiar(loremText,"1");
    } else {
        
    }
    if (options.capitalize==true) {
        cambiar(loremText,"2");
        
    } else {
        
    }
    if (options.replaceSpaces==true) {
        cambiar(loremText,"3");
    } else {
        
    }
    break;
} while (result.length<3);
/*if (result >= 1 && result <= 3) {
  cambiar(loremText, result);
} else {
  alert("Error de eleccion");
}*/

function cambiar(cadena, eleccion) {
  let arrayCadena;
  let palabra;
  let endTime = new Date();

  switch (eleccion) {
    case "1":
      arrayCadena = cadena.split("");
      palabra = "";

      for (let index = 0; index < arrayCadena.length; index++) {
        if (arrayCadena[index] == "a") {
          arrayCadena[index] = "@";
          palabra = palabra + arrayCadena[index];
        } else if (arrayCadena[index] == "e") {
          arrayCadena[index] = "3";
          palabra = palabra + arrayCadena[index];
        } else if (arrayCadena[index] == "i") {
          arrayCadena[index] = "1";
          palabra = palabra + arrayCadena[index];
        } else if (arrayCadena[index] == "o") {
          arrayCadena[index] = "0";
          palabra = palabra + arrayCadena[index];
        } else if (arrayCadena[index] == "s") {
          arrayCadena[index] = "$";
          palabra = palabra + arrayCadena[index];
        } else {
          palabra = palabra + arrayCadena[index];
        }
      }
      console.log(palabra);
      
      break;
    case "2":
      arrayCadena = cadena.split(" ");
      palabra = "";
      let palabra2 = "";
      let palabra3 = "";

      for (let index = 0; index < arrayCadena.length; index++) {
        palabra = arrayCadena[index].split("");

        for (let index = 0; index < palabra.length; index++) {
          if (index == 0) {
            palabra2 = palabra[index].toUpperCase();
          } else {
            palabra2 = palabra2 + palabra[index].toString();
          }
        }
        palabra3 = palabra3 + " " + palabra2;
      }
      console.log(palabra3);
      //contarCarac(loremText);
      //var tiempo = performance.now() - startTime;
      //console.log("Work Done in " + tiempo + "ms");
      break;
    case "3":
      arrayCadena = cadena.split(" ");
      palabra = "";

      for (let index = 0; index < arrayCadena.length; index++) {
        if (index == 0) {
          palabra = arrayCadena[index].toString();
        } else {
          palabra = palabra + "," + arrayCadena[index].toString();
        }
      }
      console.log(palabra);
      //contarCarac(loremText);
      //var tiempo = performance.now() - startTime;
      //console.log("Work Done in " + tiempo + "ms");
      break;
  }
  


  
}
contarCarac(loremText);
var tiempo = performance.now() - startTime;
console.log("Work Done in " + tiempo + "ms");

function contarCarac(cadena) {
    let arrayCaracter = cadena.split("");
    let numCaract = arrayCaracter.length;
    let arrayPalabr = cadena.split(" ");
    let numPalab = arrayPalabr.length;

    console.log(numPalab + " Words, " + numCaract + " Caracters");
  }
function comprobacionRespuesta(cadena) {
    if (cadena == "y") {
      result.push(true);
    } 
    else if (cadena == "n") {
        result.push(false);
    } 
    else {
      alert("Respuesta no valida");
      result.push(false);
    }
  }

