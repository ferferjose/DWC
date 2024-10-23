'use strict'
window.addEventListener("load", function (event) {
    
    let a1 = new Array();

    for (let index = 0; index <= 3; index++) {
        a1[index] = Number(prompt('Introduce un numero'));
    }

    let sueldos = (a1) =>{
        let totalSueldos = 0;
        let contador = 0;
        let contador2 = 0;
        for (let index = 0; index < a1.length; index++) {
            totalSueldos = totalSueldos + a1[index];
            if (a1[index] >= 100 && a1[index] <= 300) {
                contador++;
            } else if (a1[index] > 300) {
                contador2++;
            }
        }
        return `Acumulado total ${totalSueldos}\nCobran entre 100 y 300: ${contador}\nCobran más de 300: ${contador2}`;
    }
    console.log(sueldos(a1));

});