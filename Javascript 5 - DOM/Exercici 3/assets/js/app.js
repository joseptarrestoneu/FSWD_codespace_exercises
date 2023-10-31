window.addEventListener("load", () => {
    let id = 0;
    let text = "";
    let alert = document.querySelector(".alert");
    let close = alert.firstElementChild;
    let input = document.querySelector("#task"); 
    let arrow = document.querySelector(".arrow");
    let container = document.querySelector(".container");
    let pencil = document.querySelector(".fa-pencil");
    let trash = document.querySelector(".fa-trash");
    
    close.addEventListener("click", ()=> {
        alert.classList.add("dismissible")
    })
    
    input.addEventListener("focus", () => {
        document.addEventListener("keydown", (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
            };
        });
    });

    arrow.addEventListener("click", (event) => {
        // Eliminar los espacios al principio y al final del string
        if (input.value.trim() === "") {
            event.preventDefault();
            input.value = "";
            alert.classList.remove("dismissible");
        } else {
            id++;
            container.querySelector("tbody")?.insertAdjacentHTML("beforeend", generateRow(id, input.value));
            input.value = "";
        }
    });  

    trash.addEventListener("click", (event) => {
        event.target.
        console.log(event);
        
    });

});

// Funcion para generar una nueva fila (nueva nota) => refactoración
const generateRow = (id, text) => {
    let newRow = 
    `<tr id=${id}>
        <td>
            <i class='fa-solid fa-circle-check fa-2x'></i>
            <span class='task' contenteditable='true'>${text}</span>
        </td>
        <td>
            <span class='fa-stack fa-2x'>
                <i class='fa-solid fa-square fa-stack-2x'></i>
                <i class='fa-solid fa-pencil fa-stack-1x fa-inverse'></i>
            </span>
        </td>
        <td>
            <span class='fa-stack fa-2x'>
                <i class='fa-solid fa-square fa-stack-2x'></i>
                <i class='fa-solid fa-trash fa-stack-1x fa-inverse'></i>
            </span>
        </td>
    </tr>`
    return newRow
}


