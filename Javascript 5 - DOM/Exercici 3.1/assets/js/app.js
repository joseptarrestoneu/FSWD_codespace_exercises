window.addEventListener("load", () => {
    let id = 0;
    let alert = document.querySelector(".alert");
    let message = document.querySelector(".message");
    let close = alert.firstElementChild;
    let input = document.querySelector("#task"); 
    let arrow = document.querySelector(".arrow");
    let container = document.querySelector(".list-task");
    let done = document.querySelectorAll(".fa-circle-check")
    let trash = document.querySelectorAll(".fa-trash");
    let pencil = document.querySelectorAll(".fa-pencil");
    let task = document.querySelectorAll(".task");
    let buttonAll = document.querySelector(".all");
    let buttonToDo = document.querySelector(".todo");
    let buttonDone = document.querySelector(".done");
  
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
            // Añadimos escuchador de eventos para el editar el texto sin el boton
            container.querySelector("tbody").lastElementChild.firstElementChild.lastElementChild.addEventListener("click", (event) => {
                editTask(event, true)
            })
            message.classList.remove("dismissible");
            
            setTimeout(() => {
                message.classList.add("dismissible");
            }, 5000);

            input.value = "";
        }
        done = document.querySelectorAll(".fa-circle-check");  
    });  

    // Marcar las tareas como realizadas. Hay que recorrer todos los items
    done.forEach(item => {
        item.addEventListener("click", (event) => {
            deleteTask(event)
        });        
    });

    // Borrar las tareas como realizadas. Hay que recorrer todos los items
    trash.forEach(item => {
        item.addEventListener("click", (event) => {
            removeTask(event, false)
        });        
    });

    // Editar las tareas como realizadas. Hay que recorrer todos los items
    pencil.forEach(item => {
        item.addEventListener("click", (event) => {
            editTask(event, false)
        });        
    });

    // Editar las tareas como realizadas pero desde la misma tarea. Hay que recorrer todos los items
    task.forEach(item => {
        item.addEventListener("focus", (event) => {
            editTask(event, true)
        });        
    });

    // Filtrar las tareas 
    // All
    buttonAll.addEventListener("click", () => {
        let tasks = document.querySelectorAll(".task-file");
        tasks.forEach(item => {
            item.classList.remove("deleted");
        }) 
    });
    // ToDo
    buttonToDo.addEventListener("click", () => {
        let tasks = document.querySelectorAll(".task-file");
        tasks.forEach(item => {
            item.classList.remove("deleted");
            if (item.firstElementChild.lastElementChild.dataset.completed == "true") {
                item.classList.add("deleted");
            }
        }) 
    });
    // Done
    buttonDone.addEventListener("click", () => {
        let tasks = document.querySelectorAll(".task-file");
        tasks.forEach(item => {
            item.classList.remove("deleted");
            if (item.firstElementChild.lastElementChild.dataset.completed == "false") {
                item.classList.add("deleted");
            }
        })
    });

});

// Funcion para generar una nueva fila (nueva nota) => refactoración
const generateRow = (id, text) => {
    //Opcion 1
    let newRow = `<tr id=${id} class="row task-file">
        <td class="col">
            <i class='fa-solid fa-circle-check fa-2x'></i>
            <span class='task' contenteditable='true' data-completed="false">${text}</span>
        </td>
        <td class="col-1">
            <span class='fa-stack fa-2x'>
                <i class='fa-solid fa-square fa-stack-2x'></i>
                <i class='fa-solid fa-pencil fa-stack-1x fa-inverse'></i>
            </span>
        </td>
        <td class="col-1">
            <span class='fa-stack fa-2x'>
                <i class='fa-solid fa-square fa-stack-2x'></i>
                <i class='fa-solid fa-trash fa-stack-1x fa-inverse'></i>
            </span>
        </td>
    </tr>`
    return newRow

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
        event.target.parentNode.parentNode.remove();
    } else {
        event.target.parentNode.parentNode.parentNode.remove();
    }
}

// Funcion para editar las tareas como realizadas
const editTask = (event, onfocus) => {
    let editask = event;
    if (onfocus) {
        editask.target.classList.add("editable");
        document.addEventListener("keydown", (event) => {
            // let text = editask.target.innerHTML.trim();
            console.log(editask.target.textContent.trim().length);
            
            if (event.code === "Escape") {
                editask.target.classList.remove("editable");
                editask.target.blur();
                // if (editask.target.innerHTML === "" || editask.target.textContent.trim().length === 0) {
                if (editask.target.textContent.trim().length === 0) {
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

// Proyecto sacar funcion botones
const filtrar = (element) => {
    buttonAll.addEventListener("click", () => {
        element.forEach(item => {
            item.parentNode.parentNode.classList.remove("deleted");
            if (item.dataset.completed == "false") {
                item.parentNode.parentNode.classList.add("deleted");
            }
        }) 
    });
}