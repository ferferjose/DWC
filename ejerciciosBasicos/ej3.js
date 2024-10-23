'use strict'
let n = parseInt(prompt('Escribe un numero'));
if(isNaN(n)){
    alert('ERROR el dato introducido no es un numero')
}else{
    if(n%2==0){
        alert('El número es par');
    }else{
        alert('El número es impar');
    }
}