'use strict'
let n = parseInt(prompt('Escribe un numero'));
while(isNaN(n)){
    n = parseInt(prompt('Escribe un numero correcto'));
}
let limite = parseInt(prompt('Escribe hasta donde es la tabla de multiplicar'));
while(isNaN(limite)){
    limite = parseInt(prompt('Escribe un numero correcto'));
}
for(let i=1; i<=limite; i++){
    document.write(n+' * '+ i + ' = '+ (n*i)+'<br/>');
}