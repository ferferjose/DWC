'use strict'
window.addEventListener("load", function (event) {
    
    let alturas = new Array();

    for (let index = 0; index < 5; index++) {
        alturas[index] = Number(prompt('Introduce un numero'));
    }

    let mediaAlturas = (alturas) =>{
        let media = 0;
        for (let index = 0; index < alturas.length; index++) {
            media = media + alturas[index];
        }
        return media/alturas.length;
    }

    console.log(mediaAlturas(alturas));
});