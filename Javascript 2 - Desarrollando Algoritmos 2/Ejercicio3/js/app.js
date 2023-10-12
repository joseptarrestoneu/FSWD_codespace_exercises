// Ejercicio 3
// Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.
// ****
// ****
// ****
// ****

const ejercicio3 = () => {
    let result = "";
    let rows = prompt("Introduce el número de filas", 1);
    let columns = prompt("Introduce el número de columnas", 1);
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < columns; i++) {
            result += "*"
        }
        result += "\n"
    }
    console.log(result);
};

ejercicio3();