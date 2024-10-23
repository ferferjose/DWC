'use strict'
window.addEventListener("load", function (event) {
    
    let a1 = new Array();

    for (let index = 0; index <= 3; index++) {
        a1[index] = Number(prompt('Introduce un numero'));
    }

    let calculos = (a1) =>{
        let acumulado = 0;
        let acumuladoMayor36 = 0;
        let contador50 = 0;
        for (let index = 0; index < a1.length; index++) {
            acumulado = acumulado + a1[index];
            if (a1[index]>36) {
                acumuladoMayor36 = acumuladoMayor36 + a1[index];
            }
            if (a1[index]>=50) {
                contador50++;
            }
        }
        return `Acumulado total ${acumulado}\nAcumulado mayor que 36 ${acumuladoMayor36}\nContador mayores que 50: ${contador50}`;
    }
    console.log(calculos(a1));

});