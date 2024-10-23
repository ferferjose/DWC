'use strict'
window.addEventListener("load", function (event) {
    let numero = Number(prompt('Introduce un numero'));

    let potencia = (numero) => numero*numero*numero;

    potencia(numero);

    console.log(potencia(numero));
});