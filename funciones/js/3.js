'use strict'
window.addEventListener("load", function (event) {
    console.log('cargado');
    
    let numeros = new Array();
    for (let index = 0; index < 3; index++) {
        numeros.push(Number(prompt('Introduce un numero')));
    }

    let maximo = (numeros) => Math.max(...numeros);

    console.log(maximo(numeros));

});