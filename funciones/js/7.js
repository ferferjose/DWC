'use strict'
window.addEventListener("load", function (event) {
    let numeros = new Array();
    for (let index = 0; index < 3; index++) {
        numeros.push(Number(prompt('Introduce un numero')));
    }

    let suma = (numeros) =>{
        
        let total = 0;
        for (let index = 0; index < 3; index++) {
            total = total + numeros[index];
        }
        return total;
    }
    console.log(suma(numeros));
    
});