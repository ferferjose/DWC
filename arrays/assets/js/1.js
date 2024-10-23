'use strict'
window.addEventListener("load", function (event) {
    
    let numeros = new Array();

    for (let index = 0; index < 10; index++) {
        numeros[index] = Number(prompt('Introduce un numero'));
    }

    let sumar = (numeros) =>{
        let total = 0;
        for (let index = 5; index < numeros.length; index++) {
            total=total+numeros[index];
        }
        return total;
    }

    console.log(sumar(numeros));
});