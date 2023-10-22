{/* <i class="fa-solid fa-sun"></i> */}

function changeLight() {

    let select = document.querySelector("div");
    let sun = document.querySelector("i");
    console.log(sun.getAttribute("class") === "fa-solid fa-moon");
    
    sun.getAttribute("class") !== "fa-solid fa-moon" ?
        sun.setAttribute("class","fa-solid fa-moon") :
        sun.setAttribute("class","fa-solid fa-sun")
    select.classList.toggle("dark")
}

