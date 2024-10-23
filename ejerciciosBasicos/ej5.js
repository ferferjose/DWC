'use strict'
let colores = ['Rojo', 'Verde', 'Azul'];

colores.push(prompt('Escribe un color'));
colores.forEach((elemento, index, arr)=>{
    document.write(elemento+"<br/>");
});
console.log(colores);
