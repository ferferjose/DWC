'use strict'
window.addEventListener("load", function (event) {
    let numero = Number(prompt('Introduce un numero'));

    let cuatrimestre = (numero) =>{
        if(numero<5 && numero>0){
            console.log('Primer cuatrimestre');
        }else{
            if(numero<9 && numero>4){
                console.log('Segundo cuatrimestre');
            }else{
                if(numero>9 && numero<13)
                    console.log('Tercer cuatrimestre');
                else
                    console.log('El numero introducido es erroneo');
            }
        }
    };

    console.log(cuatrimestre(numero));
    
});