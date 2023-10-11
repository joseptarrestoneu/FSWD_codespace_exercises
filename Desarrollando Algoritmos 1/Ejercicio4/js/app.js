// Ejercicio 4
// Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable
// “centinela” llamada isGreen ”. Si el semáforo está verde, mostrar por consola: “Cross the road ””, en
// caso contrario mostrar: Please await

// OPCION 1
// for (let i = 0; i < 100; i++) {
//     let random =  Math.round(Math.random()); 
//     console.log(random);
//     let isGreen;
//     random == 1 ? isGreen = true : isGreen = false; 
//     if (isGreen == true) {
//         let div = document.getElementById("semafor");
//         // let div = document.createElement('div');
//         div.classList.add('green');
//         let text = "Cross the road";
//         div.innerHTML = text;
//         // document.querySelector(".text").append(div);
//     } else {
//         let div = document.getElementById("semafor");
//         // let div = document.createElement('div');
//         div.classList.add('red');
//         let text = "Please await";
//         div.innerHTML = text;
//         // document.querySelector(".text").append(div);
//     }
// }

// OPCION 2
let counter = 0;

let timer = setInterval(() => {
    document.getElementById("semafor").className = " ";
    let random =  Math.round(Math.random()); 
    console.log(random);
    let isGreen;
    random == 1 ? isGreen = true : isGreen = false; 
    if (isGreen == true) {
        let div = document.getElementById("semafor");
        div.classList.add('green');
        // let text = "Cross the road";
        let text = "&#128694";
        div.innerHTML = text;
    } else {
        let div = document.getElementById("semafor");
        div.classList.add('red');
        // let text = "Please await";
        let text = "&#128372";
        div.innerHTML = text;
    }
    counter++;
    if (counter == 100) {
        clearInterval(timer);
    }
}, 400);

