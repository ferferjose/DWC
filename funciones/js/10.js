'use strict'
window.addEventListener("load", function (event) {
    let numero = Number(prompt('Introduce un numero'));

    let raiz = (numero) => Math.sqrt(numero);

    raiz(numero);

    console.log(raiz(numero));
});