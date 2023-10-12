// Ejercicio Clases
//  - Crea una clase llamada User, que define un constructor, que recible 1 parámetro DNI
//  - A continuación añade los setters y los getters para el nombre y el email.
//  - Crea un objeto y dale un nombre y un email y muestralos por consola

// Crear clase
class User {
    constructor(dni, name, email) {
        this.dni = dni;
        this.name = "";
        this.email = "";
    }
    set dnis(newDni) {
        this.dni.push(newDni);
    }
    set names(newName) {
        this.name.push(newName);
    }
    set emails(newEmail) {
        this.email.push(newEmail);
    }
    // // Opcion sin console.log()
    // get dnis() {
    //     return this.dni;
    // }
    // get names() {
    //     return this.name;
    // }
    // get emails() {
    //     return this.email;
    // }
    // Opcion con console.log()
    get dnis() {
        return console.log(this.dni);
    }
    get names() {
        return console.log(this.name);
    }
    get emails() {
        return console.log(this.email);
    }
}

// Crear objecto user
let user1 = new User("47790646G");
console.log(user1)

// Introducir nombre y email al objecto creado
user1.name = "Josep Tarrés";
user1.email = "prova@prova.com";

// // Mostrar por consola (opcio 1)
// console.log(user1);
// console.log(user1.dnis);
// console.log(user1.names);
// console.log(user1.emails);

// Mostrar por consola (opcio 2)
console.log(user1);
user1.dnis
user1.names
user1.emails
