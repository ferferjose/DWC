'use strict'
let numeros = [1 ,2 ,4, 0, 99. -1];
let n = prompt('Escribe un numero');
while(n!='stop'){
    n = prompt('Escribe un numero');
    if(n!='stop'){
        let num = parseInt(n);
        if(!isNaN(num.toLowerCase())){
            numeros.push(num);
        }else{
            alert('numero incorrecto');
        }
    }
}
numeros.forEach((elemento, index, arr) => {
    document.write(elemento + "<br/>");
});
document.write('El numero mayor es '+ numeros.max() + "<br/>");