// Opcio 1
colors = ["#03071eff", "#370617ff", "#6a040fff", "#9d0208ff", "#d00000ff", "#dc2f02ff", "#e85d04ff", "#f48c06ff", "#faa307ff", "#ffba08ff"]
let randomColor;
function changeLight() {
    let select = document.querySelector("div");
    let icon = document.querySelector("i");
    let text = document.querySelector("span");
    if (icon.getAttribute("class") !== "fa-solid fa-moon") {
        icon.setAttribute("class","fa-solid fa-moon");
        text.textContent = "Good Morging!";
        randomColor = (Math.random() * (colors.length - 0) + 0).toFixed();
        select.style.backgroundColor = colors[randomColor];
    } else {
        icon.setAttribute("class","fa-solid fa-sun");
        text.textContent = "Good Night!";
        randomColor = (Math.random() * (colors.length - 0) + 0).toFixed();
        select.style.backgroundColor = colors[randomColor];
    }
    select.classList.toggle("dark")
}