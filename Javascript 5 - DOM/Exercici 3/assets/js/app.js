window.addEventListener("load", () => {
    let id = 0;
    let alert = document.querySelector(".alert");
    let close = alert.firstElementChild;
    let input = document.querySelector("#task"); 
    let arrow = document.querySelector(".arrow");
    let container = document.querySelector(".container");
    let done = document.querySelectorAll(".fa-circle-check")
    let trash = document.querySelectorAll(".fa-trash");
    let pencil = document.querySelectorAll(".fa-pencil");
    let task = document.querySelectorAll(".task");

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
            // Añadimos escuchador de eventos para el primer boton
            container.querySelector("tbody").lastElementChild.firstElementChild.firstElementChild.addEventListener("click", (event) => {
                deleteTask(event)
            })
            // Añadimos escuchador de eventos para el segundo boton
            container.querySelector("tbody").lastElementChild.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.addEventListener("click", (event) => {
                editTask(event, false)
            })
            // Añadimos escuchador de eventos para el tercer boton
            container.querySelector("tbody").lastElementChild.lastElementChild.firstElementChild.lastElementChild.addEventListener("click", (event) => {
                removeTask(event, false)
            })
            // Añadimos escuchador de eventos para el editar el texto sin el boto
            container.querySelector("tbody").lastElementChild.firstElementChild.lastElementChild.addEventListener("click", (event) => {
                editTask(event, true)
            })

            input.value = "";
        }
        done = document.querySelectorAll(".fa-circle-check");  
    });  

    // Marcar las tareas como realizadas. Hay que recorrer todos los items
    done.forEach(item => {
        item.addEventListener("click", (event) => {
            deleteTask(event)
        });        
    })

    // Borrar las tareas como realizadas. Hay que recorrer todos los items
    trash.forEach(item => {
        item.addEventListener("click", (event) => {
            removeTask(event, false)
        });        
    })

    // Editar las tareas como realizadas. Hay que recorrer todos los items
    pencil.forEach(item => {
        item.addEventListener("click", (event) => {
            editTask(event, false)
        });        
    })

    // Editar las tareas como realizadas pero desde la misma tarea. Hay que recorrer todos los items
    task.forEach(item => {
        item.addEventListener("focus", (event) => {
            editTask(event, true)
        });        
    })

});

// Funcion para generar una nueva fila (nueva nota) => refactoración
const generateRow = (id, text) => {
    //Opcion 1
    let newRow = 
    `<tr id=${id}>
        <td>
            <i class='fa-solid fa-circle-check fa-2x'></i>
            <span class='task' contenteditable='true' data-completed="false">${text}</span>
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

    // Opcion 2
    // let newRow = document.createElement("tr");
    // newRow.setAttribute("id",id);
    // newRow.innerHTML = 
    //    `<td>
    //         <i class='fa-solid fa-circle-check fa-2x'></i>
    //         <span class='task' contenteditable='true' data-completed="false">${text}</span>
    //     </td>
    //     <td>
    //         <span class='fa-stack fa-2x'>
    //             <i class='fa-solid fa-square fa-stack-2x'></i>
    //             <i class='fa-solid fa-pencil fa-stack-1x fa-inverse'></i>
    //         </span>
    //     </td>
    //     <td>
    //         <span class='fa-stack fa-2x'>
    //             <i class='fa-solid fa-square fa-stack-2x'></i>
    //             <i class='fa-solid fa-trash fa-stack-1x fa-inverse'></i>
    //         </span>
    //     </td>`
    // newRow.firstElementChild.firstElementChild.addEventListener("click", (event) => {
    //     deleteTask(event)
    // })
    // // Para hacer esto hace falta modificar arrow.addEventListener() borrando:
    // container.querySelector("tbody").lastElementChild.firstElementChild.firstElementChild.addEventListener("click", (event) => {
    //    deleteTask(event)
    // })
    // A parte hay que añadir otras partes aquí no desarrolladas 

}

// Funcion para marcar las tareas como realizadas
const deleteTask = (event) => {
    let task = event.target.nextElementSibling
    let text = task.textContent;
    if (task.querySelector("del")) {
        event.target.nextElementSibling.innerHTML = `${text}`;
        // Añadimos data-completed para dar información al programador
        task.setAttribute("data-completed", "false");
    } else {
        event.target.nextElementSibling.innerHTML = `<del>${text}</del>`;
        // Añadimos data-completed para dar información al programador
        task.setAttribute("data-completed", "true");
    }
}

// Funcion para borrar las tareas como realizadas
const removeTask = (event, editing) => {
    if (editing) {
        // Opcion que el evento borre toda la fila. 
        event.target.parentNode.parentNode.remove();
        // Opcion que el evento no borre toda la fila y le ponga una clase para hacer displya: none con css
        // event.target.parentNode.parentNode.classList.add("deleted");
    } else {
        // Opcion que el evento borre toda la fila. 
        event.target.parentNode.parentNode.parentNode.remove();
        // Opcion que el evento no borre toda la fila y le ponga una clase para hacer displya: none con css
        // event.target.parentNode.parentNode.parentNode.classList.add("deleted");
    }
}

// Funcion para editar las tareas como realizadas
const editTask = (event, onfocus) => {
    let editask = event;
    if (onfocus) {
        editask.target.classList.add("editable");
        document.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
                editask.target.classList.remove("editable");
                editask.target.blur();
                if (editask.target.innerHTML === "") {
                    removeTask(editask, true);
                }
            }
        });
        editask.target.addEventListener("blur", () => {
            if (editask.target.innerHTML === "") {
                removeTask(editask, true);
            }
            editask.target.classList.remove("editable");
        });
    } else {
        let editableTask = event.target.parentNode.parentNode.previousElementSibling.lastElementChild;
        editableTask.classList.add("editable");
        editableTask.focus();
    }
}
