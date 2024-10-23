'use strict'
window.addEventListener("load", function (event) {
    let numeros = [1, -2, 4, 99, 5, 0, -15];

    let negativos = () =>{
        let c = 0;
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i]<0){ c++; }
        }
        document.write(`<p>Hay ${c} negativos<p/>`);
    }
    let positivos = () =>{
        let c = 0;
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i]>=0){ c++; }
        }
        document.write(`<p>Hay ${c} positivos<p/>`);
    }
    let m15 = () =>{
        let c = 0;
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i]%15==0){ c++; }
        }
        document.write(`<p>Hay ${c} multiplos de 15<p/>`);
    }
    let acumulado = () =>{
        let c = 0;
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i]<0){ c= c+numeros[i] }
        }
        document.write(`<p>Hay ${c} acumulado<p/>`);
    }
    negativos();
    positivos();
    m15();
    acumulado();
    
});