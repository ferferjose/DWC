'use strict'
window.addEventListener("load", function (event) {
    
    let a1 = new Array();
    let a2 = new Array();

    for (let index = 0; index < 3; index++) {
        a1[index] = Number(prompt('Introduce un numero'));
    }

    let sueldos = (a1) =>{
        let par = 0;
        let impar = 0;
        for (let index = 0; index < a1.length; index++) {
            if(a1[index]%2==0){par++;}
            else{impar++}
        }
        return `Pares ${par}\nImpares: ${impar}`;
    }
    console.log(sueldos(a1));

});