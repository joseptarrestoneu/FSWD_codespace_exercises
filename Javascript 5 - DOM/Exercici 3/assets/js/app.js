window.addEventListener("load", () => {
    let id = 0;
    let text = "";
    let alert = document.querySelector(".alert");
    let close = alert.firstElementChild;
    let input = document.querySelector("#task"); 
    // console.log(input);
    
    close.addEventListener("click", ()=> {
        alert.classList.add("dismissible")
    })
    input.addEventListener("focus", () => {
        document.addEventListener("keydown", (event) => {
            event.preventDefault(event.code === "Enter" || event.code === "NumpadEnter");
        })
    })
    
});


