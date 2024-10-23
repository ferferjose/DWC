'use strict'
let palabra = prompt('Una palabra');
let alReves = '';
function darVuelta(palabra){
    for (let i = palabra.length - 1; i >= 0; i--) {
        alReves = alReves + palabra[i];
    }
}

function esPalindroma(palabra, alReves){
    if(palabra===alReves){
        console.log('Es palíndroma');
    }
    
    console.log(alReves);
}
darVuelta(palabra);
esPalindroma(palabra, alReves);

