// Creación de calendarios
let today = new Date;
let actualMonth = today.getMonth();
let monthName = '';

function month(value) {
    switch (value) {
        case 0:
            monthName = 'january';
            break;
        case 1:
            monthName = 'february';
            break;
        case 2:
            monthName = 'march';
            break;
        case 3:
            monthName = 'april';
            break;
        case 4:
            monthName = 'may';
            break;
        case 5:
            monthName = 'june';
            break;
        case 6:
            monthName = 'july ';
            break;
        case 7:
            monthName = 'august';
            break;
        case 8:
            monthName = 'september';
            break;
        case 9:
            monthName = 'octuber';
            break;
        case 10:
            monthName = 'november';
            break;
        case 11:
            monthName = 'december';
            break;
        default:
            console.log("Error")
    }  
    return monthName  
}

let divActualMonth = document.getElementById("actualMonth");
let divMonth1 = document.getElementById("month-1");
let divMonth2 = document.getElementById("month+1");

divActualMonth.innerHTML = `${month(actualMonth)}`;
divMonth1.innerHTML = `${month(actualMonth-1)}`;
divMonth2.innerHTML = `${month(actualMonth+1)}`;

// Crear fechas calendario
let lastDayActualMonth = new Date(today.getFullYear(), today.getMonth()+1,0);
const date = (new Date(today.getFullYear(), today.getMonth(), 1)).getDay();
let dateWeek = 0;
switch (date) {
    case 0:
        dateWeek = 7;
        break;
    case 1:
        dateWeek = 1;
        break;
    case 2:
        dateWeek = 2;
        break;
    case 3:
        dateWeek = 3;
        break;
    case 4:
        dateWeek = 4;
        break;
    case 5:
        dateWeek = 5;
        break;
    case 6:
        dateWeek = 6;
        break;
    default:
        console.log("Error")
}  

let counter = 1;

for (let i = dateWeek; i < (dateWeek+lastDayActualMonth.getDate()); i++) {
    div = document.getElementById(`cell${i}`);
    div.innerHTML = counter;
    counter++;
}



