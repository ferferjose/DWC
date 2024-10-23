'use strict'
window.addEventListener("load", function (event) {
        console.log('cargado');
    
    let numeros = new Array();
    for (let index = 0; index < 3; index++) {
        numeros.push(Number(prompt('Introduce un numero')));
    }
    let mostrar = (numeros)=>{
        for (let index = 0; index < 3; index++) {
            console.log(numeros[index]);
        }
    }
    mostrar(numeros);

});