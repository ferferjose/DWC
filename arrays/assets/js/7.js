'use strict'
window.addEventListener("load", function (event) {
    
    let a1 = new Array();
    let a2 = new Array();

    for (let index = 0; index < 3; index++) {
        a1[index] = Number(prompt('Introduce un numero'));
        a2[index] = Number(prompt('Introduce un numero'));
    }

    let sueldos = (a1) =>{
        let acumulado = 0;
        let acumulado2 = 0;
        for (let index = 0; index < a1.length; index++) {
            acumulado = acumulado + a1[index];
            acumulado2 = acumulado2 + a2[index];
        }
        return `Acumulado1 ${acumulado}\nAcumulado2: ${acumulado2}`;
    }
    console.log(sueldos(a1));

});