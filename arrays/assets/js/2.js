'use strict'
window.addEventListener("load", function (event) {
    
    let notas = new Array();

    for (let index = 0; index < 10; index++) {
        notas[index] = Number(prompt('Introduce un numero'));
    }

    let revision = (notas) =>{
        for (let index = 0; index < notas.length; index++) {
            if(notas[index]>=7){ console.log('El alumno numero '+(index+1)+' supera o iguala el 7'); }
            else{ console.log('El alumno numero '+(index+1)+' no llega al 7'); }
        }
    }

    console.log(revision(notas));
});