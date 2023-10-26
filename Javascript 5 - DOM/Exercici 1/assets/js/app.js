
function changeLight() {

    let select = document.querySelector("div");
    let sun = document.querySelector("i");
    let text = document.querySelector("span");
    
    if (sun.getAttribute("class") !== "fa-solid fa-moon") {
        sun.setAttribute("class","fa-solid fa-moon");
        text.textContent = "Good Night!";
    } else {
        sun.setAttribute("class","fa-solid fa-sun");
        text.textContent = "Good Morning!";
    }
    select.classList.toggle("dark")
}

