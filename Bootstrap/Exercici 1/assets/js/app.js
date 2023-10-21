// BBDD

const cites = [
    {
        id_cite: 778890,
        user_cite: "Lerga Casas, Manuel",
        type_cite: "successive",
        date_cite: new Date(2023, 9, 23),
        hourInitial_cite: "9:00",
        hourFinal_cite: "10:00",
    },
    {
        id_cite: 647789,
        user_cite: "Casas Verdaguer, Eva",
        type_cite: "successive",
        date_cite: new Date(2023, 9, 23),
        hourInitial_cite: "11:00",
        hourFinal_cite: "12:00",
    },
    {
        id_cite: 674890,
        user_cite: "Lopez Pato, Toni",
        type_cite: "successive",
        date_cite: new Date(2023, 9, 23),
        hourInitial_cite: "12:00",
        hourFinal_cite: "13:00",
    },
    {
        id_cite: 373790,
        user_cite: "Argüelles Arcarons, Ivan",
        type_cite: "successive",
        date_cite: new Date(2023, 9, 21),
        hourInitial_cite: "10:00",
        hourFinal_cite: "11:00",
    },
    {
        id_cite: 373566,
        user_cite: "Tarrés Toneu, Josep",
        type_cite: "successive",
        date_cite: new Date(2023, 9, 17),
        hourInitial_cite: "9:00",
        hourFinal_cite: "10:00",
    }
]

// Creación de calendarios
let today = new Date;
let actualMonth = today.getMonth();
let actualYear = today.getFullYear();
let monthName = '';

function monthCalendar(year, actualMonth) {

    function monthValue(value) {
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
                monthName = 'july';
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

    let month = actualMonth
    let counter2 = 0;
    let getMonth;
    for (let j = month-1; j < month+2; j++) {
        if(j == -1) {
            getMonth = 11;
        } else if (j == 12) {
            getMonth = 0;
        } else {
            getMonth = j;
        }
        let date = new Date(year, getMonth, 1);
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
        for (let i = 1; i < 43; i++) {
            div = document.getElementById(`cell${i}_month-${counter2}`);
            div.innerHTML = "";
        }

        for (let i = dateWeek; i < (dateWeek+lastDayMonth.getDate()); i++) {
            div = document.getElementById(`cell${i}_month-${counter2}`);
            div.innerHTML = counter;
            actualDate = new Date(year, getMonth, counter+1).toISOString();
            div.classList.add(actualDate)
            counter++;
        }
        counter2++;
    }
    let divActualMonth = document.getElementById("actualMonth");
    let divMonth1 = document.getElementById("month-1");
    let divMonth2 = document.getElementById("month+1");
    divActualMonth.innerHTML = `${monthValue(month)}`;
    divActualMonth.classList.add(`${monthValue(month)}`);
    divMonth1.innerHTML = `${monthValue(month-1)}`;
    divMonth1.classList.add(`${monthValue(month-1)}`);
    divMonth2.innerHTML = `${monthValue(month+1)}`;
    divMonth2.classList.add(`${monthValue(month+1)}`);
}

monthCalendar(actualYear, actualMonth)   

// Canviar fechas calendarios
// Menys mesos
function actualitzarCalendarMenys (year, month) {
    event.preventDefault();
    if (month === 11) {
        actualYear = year + 1;
        actualMonth = 0;
    } else {
        actualMonth = month + 1;
    }
    return monthCalendar(actualYear, actualMonth);
}
let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", () => actualitzarCalendarMenys(actualYear, actualMonth));

// Mes mesos
function actualitzarCalendarMes (year, month) {
    event.preventDefault();
    if (month === 0) {
        actualYear = year - 1;
    }
    if (actualMonth !== 0) {
        actualMonth = month - 1;
    } else {
        actualMonth = 11;
    }
    console.log("year", actualYear);
    console.log("month", actualMonth);
    
    return monthCalendar(actualYear, actualMonth);
}
let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", () => actualitzarCalendarMes(actualYear, actualMonth));

// DayHeader
function dayHeaderFunct(today) {
    let nameDay = "";
    switch (today) {
        case 0:
            nameDay = "sunday";
            break;
        case 1:
            nameDay = "monday";
            break;
        case 2:
            nameDay = "thuesday";
            break;
        case 3:
            nameDay = "wenesday";
            break;
        case 4:
            nameDay = "thurday";
            break;
        case 5:
            nameDay = "friday";
            break;
        case 6:
            nameDay = "saturday";
            break;
        default:
            console.log("Error")
    }  
    return nameDay;
}
let dayHeader = document.getElementById("dayHeader");
dayHeader.innerHTML = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} - ${dayHeaderFunct(today.getDay())}`

// Rellenar citas
// arrayDate = cites.map(element => element.date_cite);
// found = arrayDate.find(element => element == actualDate)
// if (found === true) {
//    let newCite = document.createElement("div");
// `<div class="row col cite">
//     <div class="col-9">
//         <i class="fa-regular fa-clock"></i>
//         <a href="">[3274321] Lozano Parets, Eva - successiva</a>
//     </div>
//     <div class="col-3  text-end">
//         <a href=""><i class="fa-regular fa-calendar-days"></i></a>
//         <a href=""><i class="fa-solid fa-chart-simple"></i></a>
//         <a href=""><i class="fa-solid fa-pen"></i></a>
//         <a href=""><i class="fa-sharp fa-solid fa-xmark fa-lg"></i></a>
//     </div>
// </div>`);
       
  // crea un nuevo div
  // y añade contenido
// // let newDiv = document.createElement("div");
// // newDiv.classList.add("row", "col", "cite");
// // let currentElement = document.createElement("div")
// // currentElement.classList.add("col-9") 
// // newDiv.appendChild(currentElement);


// // newElement = document.createEl

// // newElement = document.createElement("i")
// // newElement.classList.add("fa-sharp", "fa-solid", "fa-xmark", "fa-lg")


  // añade el elemento creado y su contenido al DOM
  let currentDiv = document.getElementById("thisCite");
  document.querySelector(".thisCite").appendChild(newDiv)