// Ejercicio 4
// Escribe un programa con 7 variables con la temperatura de los 
// 7 últimos días (Google). A continuación, muestra cuál ha sido la temperatura media.

const ejercicio4 = () => {
    let temperature = [26, 27, 29, 30, 17, 20, 23];
    let tempMitja = (temperature.reduce((conc, actualValue) => (conc + actualValue),0)) / temperature.length
    console.log(tempMitja.toFixed(2));
}

ejercicio4();
