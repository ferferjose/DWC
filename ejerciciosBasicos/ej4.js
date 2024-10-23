'use strict'
let anio = parseInt(prompt('Escriba su año de nacimiento'));
if(isNaN(anio) || anio>2024 || anio<1924){
    alert('ERROR el dato introducido no es un numero, es mayor al año actual o tienes más de 100 años');
}else{
    alert('Su edad es '+ (2024-anio));
}