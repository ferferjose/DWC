'use strict'
window.addEventListener("load", function (event) {
    let lado = Number(prompt('Introducir el lado de un cuadrado'));

    let perimetro = (lado) => lado*4;

    console.log(perimetro(lado));
    

});