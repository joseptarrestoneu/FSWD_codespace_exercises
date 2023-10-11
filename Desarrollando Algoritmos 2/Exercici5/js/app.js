/*
Escribe una función con el nombre “ stringManager ”, que recibirá 2 parámetros: un string
introducido por el usuario a través del prompt(), y un segundo parámetro, que será un objeto con las
funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.
El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt().
A continuación, mediante un menú de consola, preguntará al usuario las siguientes opciones:

- Replace chars by signs?
- Capitalize?
- Replace spaces with commas?

La primera opción reemplazará de la siguiente forma:

- a => @
- e => 3
- i => 1
- o => 0
- s => $

La segunda opción pondrá la primera letra de cada palabra en mayúscula , y la tercera cambiará los
espacios por comas. No puede haber 2 comas seguidas. 
El menú aceptará únicamente y para sí o n para no. Almacenará las respuestas en un objeto con las
propiedades : replaceChars , capitalize y replaceSpaces , cuyos valores asociados serán booleanos
La salida del programa deberá mostrar el string original, y a continuación el string con cada una de
las modificaciones requeridas Un ejemplo con todas las opciones marcadas como true

- Lorem ipsum dolor sit amet
- L0r3m 1p$um d0l0r $1t @m3t
- Lorem Ipsum Dolor Sit Amet
- Lorem,ipsum,dolor,sit,amet

** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de
transformación del string hasta que termina. Después de los string requeridos, el programa mostrará
las siguientes líneas: **

- 5 words , 25 chars
- work done in 750 milisecond
*/

let word = prompt("Introdueix una paraula","");
let menu1 = prompt("Replace chars by sings?");
let menu2 = prompt("Capitalize?");
let menu3 = prompt("Replace speces with commas?");
let props = {
    replaceChars: false,
    capitalize: false,
    replaceSpaces: false
}
if (menu1 == "y") {
    props.replaceChars = true;
}
if (menu2 == 'y') {
    props.capitalize = true;
}    
if (menu3 == 'y') {
    props.replaceSpaces = true;
}

let matriuWords = word.split(" ");

function stringManager(word, options) {
    console.log(word);
    if (options.replaceChars == true) {
        console.time('Work done in');
        console.log(word.replaceAll("a", "@").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "$"));
        console.timeEnd('Work done in');
    } 
    if (options.capitalize == true) {
        console.time('Work done in');
        let newMatriu = []
        for (let i = 0; i < matriuWords.length; i++) {
            let firstLetter = matriuWords[i].charAt(0).toUpperCase();   
            let restWord = matriuWords[i].slice(1);
            newMatriu[i] = firstLetter + restWord;
        }
        console.log(newMatriu.toString().replaceAll(","," "));
        console.timeEnd('Work done in');
    } 
    if (options.replaceSpaces == true) {
        console.time('Work done in');
        console.log(word.replaceAll(" ", ","));
        console.log(matriuWords.length,"words, ",word.length," chards.")
        console.timeEnd('Work done in');
    } 
}

stringManager(word, props)