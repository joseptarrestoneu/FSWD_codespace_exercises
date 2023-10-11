// Ejercicio 6
// Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array. A
// continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que
// se mostrará en consola, cada 10 segundos, durante 2 minutos.

phrases = [
"Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento. Henry Ford.",
"El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar. Bruce Lee.",
"La pregunta que me hago casi todos los días es: '¿Estoy haciendo lo más importante que puedo?'. Mark Zuckerberg.",
"No hay que ir para atrás ni para darse impulso. Lao Tsé.",
"Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien. Mario Benedetti.",
"Únicamente aquellos que se atreven a tener grandes fracasos, terminan consiguiendo grandes éxitos. Robert F. Kennedy.",
"Si vas a mirar atrás, que sea para ver lo que has trabajado para llegar donde estás. Mireia Belmonte.",
"No podemos estar en modo de supervivencia. Tenemos que estar en modo de crecimiento. Jeff Bezos.",
"Cada fracaso enseña al individuo algo que necesitaba aprender. Charles Dickens.",
"El que pasa el tiempo arrepintiéndose del pasado, pierde el presente y arriesga el futuro. Francisco de Quevedo.",
"Nunca pienso en las consecuencias de fallar un gran tiro. Cuando se piensa en las consecuencias, se está pensando en un resultado negativo. Michael Jordan.",
"La vida es como montar en bicicleta. Para mantener el equilibrio tienes que avanzar. Albert Einstein.",
"La mayor parte de las grandes cosas que ha conseguido el hombre fueron declaradas imposibles antes de que alguien las hiciera. Louis D. Brandeis.",
"La vida debe ser comprendida hacia detrás, pero debe ser vivida hacia delante. Søren Kierkegaard.",
"Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada. Giovanni Boccaccio.",
"Cada historia de éxito es una historia de constante adaptación, revisión y cambio. Richard Branson.",
"Lo que no te mata, te hace más fuerte. Friedrich Nietzsche.",
"La vida es o una gran aventura o nada. Hellen Keller.",
"Si tienes miedo de fallar, probablemente falles. Kobe Bryant.",
"Pies, ¿para qué os quiero? ¡Si tengo alas para volar!. Frida Kahlo.",
]

let counter = 0;

const citasBucle = setInterval( () => {
    console.log(phrases[counter]);
    counter++;
    if (counter == 120) {
        clearInterval(citasBucle)
    }
}, 10000);
