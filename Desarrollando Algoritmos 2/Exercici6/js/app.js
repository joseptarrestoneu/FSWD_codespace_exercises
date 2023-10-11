function compare(value1, value2) {
    return value1.length - value2.length;
}

let string = prompt("Introdueix un text");

let stringLowerCase = string.toLocaleLowerCase();
let stringNoSpace = stringLowerCase.replaceAll(" ","");
let arrayString = stringLowerCase.split(" ");

function countUniqueWords(array) {
    for (let i = 0; i < array.length; i++) {
        
    }
}

let lenghtWord = stringLowerCase.length;
let lenghtWihtoutWhiteSpace = stringNoSpace.length;
// let uniqueWords = xxx; // Pendent
// let uniqueWOrdsPercent = xxx; // Pendent
let lenghtOfShortestWord = arrayString.sort(compare)[0].length;
let lenghtOfLongestWord = arrayString.sort(compare)[arrayString.length - 1].length;
let avgWordLenght = (lenghtWihtoutWhiteSpace / arrayString.length).toFixed();

console.log(lenghtWord);
console.log(lenghtWihtoutWhiteSpace);
console.log(lenghtOfShortestWord);
console.log(lenghtOfLongestWord);
console.log(avgWordLenght);