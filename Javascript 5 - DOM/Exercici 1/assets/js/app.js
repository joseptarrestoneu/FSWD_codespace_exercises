// Opcio 1
function changeLight() {
    let select = document.querySelector("div");
    let icon = document.querySelector("i");
    let text = document.querySelector("span");
    
    if (icon.getAttribute("class") !== "fa-solid fa-moon") {
        icon.setAttribute("class","fa-solid fa-moon");
        text.textContent = "Good Morging!";
    } else {
        icon.setAttribute("class","fa-solid fa-sun");
        text.textContent = "Good Night!";
    }
    select.classList.toggle("dark")
}

// Opció 2
// document.addEventListener("DOMContentLoaded", () => {
//         let select = document.querySelector("div");
//         let icon = document.querySelector("i");
//         let text = document.querySelector("span");
//         icon.addEventListener("click", () => {
//             if (icon.getAttribute("class") !== "fa-solid fa-moon") {
//                 icon.setAttribute("class","fa-solid fa-moon");
//                 text.textContent = "Good Morging!";
//             } else {
//                 icon.setAttribute("class","fa-solid fa-sun");
//                 text.textContent = "Good Night!";
//             }
//             select.classList.toggle("dark")
//         })
//     });    