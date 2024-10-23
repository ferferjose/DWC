'use strict'
window.addEventListener("load", function (event) {
    let numeros = new Array();
    for (let index = 0; index < 3; index++) {
        numeros.push(Number(prompt('Introduce un numero')));
    }

    let media = (numeros) =>{
        
        let total = 0;
        for (let index = 0; index < 3; index++) {
            total = total + numeros[index];
        }
        return total/3;
    }
    console.log(media(numeros));
    
});