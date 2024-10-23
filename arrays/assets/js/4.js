'use strict'
window.addEventListener("load", function (event) {
    
    let a1 = new Array();
    let a2 = new Array();

    for (let index = 0; index <= 2; index++) {
        a1[index] = Number(prompt('Introduce un numero'));
        a2[index] = Number(prompt('Introduce un numero'));
    }

    let suma = (a1, a2) =>{
        let total = new Array();
        for (let index = 0; index < a1.length; index++) {
            total[index] = a1[index] + a2[index];
            console.log(total[index]);
        }
    }
    suma(a1, a2);
});