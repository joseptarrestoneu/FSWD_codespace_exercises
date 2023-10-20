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

// Crear fechas calendario
function monthCalendar(year, actualMonth) {
    let month = actualMonth
    let counter2 = 0;
    for (let j = month-1; j < month+2; j++) {
        let date = new Date(year, j, 1);
        let lastDayMonth = new Date(date.getFullYear(), date.getMonth()+1,0);
        let monthCalendar = date.getMonth();
        const firstDateWeek = (new Date(date.getFullYear(), monthCalendar, 1)).getDay();
        let dateWeek = 0;
        switch (firstDateWeek) {
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
        for (let i = dateWeek; i < (dateWeek+lastDayMonth.getDate()); i++) {
            div = document.getElementById(`cell${i}_month-${counter2}`);
            div.innerHTML = counter;
            actualDate = new Date(year, j, counter+1).toISOString();
            div.classList.add(actualDate)
            counter++;
        }
        counter2++;
    }
}

let divActualMonth = document.getElementById("actualMonth");
let divMonth1 = document.getElementById("month-1");
let divMonth2 = document.getElementById("month+1");

divActualMonth.innerHTML = `${month(actualMonth)}`;
divActualMonth.classList.add(`${month(actualMonth)}`);
divMonth1.innerHTML = `${month(actualMonth-1)}`;
divMonth1.classList.add(`${month(actualMonth-1)}`);
divMonth2.innerHTML = `${month(actualMonth+1)}`;
divMonth2.classList.add(`${month(actualMonth+1)}`);

monthCalendar(2023, actualMonth)   