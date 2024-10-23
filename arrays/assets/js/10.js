// 10. Se realizó un censo provincial y se desea procesar la información obtenida en
// dicho censo. De cada una de las personas censadas se tiene la siguiente
// información: número de documento, edad y sexo ('femenino' o 'masculino').
// Se pide confeccionar un programa que lea los datos de cada persona censada (para
// finalizar ingresar el valor cero en el número de documento) e informar:

// a) Cantidad total de personas censadas.
// b) Cantidad de varones.
// c) Cantidad de mujeres.
// d) Cantidad de varones cuya edad varía entre 16 y 65 años.
'use strict'
window.addEventListener("load", function (event) {
    let personas = new Array();

    let cantidadCensados = ()=>{ document.write(`<p> Cantidad de censados: ${personas.length}</p>`)};

    let contarGenero= () =>{
        let contadorV = 0;
        let contadorM = 0;
        personas.forEach((valor, indice)=>{
            if(valor.dni==='hombre'){ contadorV++}
            else {contadorM++}
            
        });
        document.write(`<p> Hombres: ${contadorV}</p>`);
        document.write(`<p> Mujeres: ${contadorM}</p>`);
        
    }

    let contarEdades = ()=> {
        let contador = 0;
        personas.forEach((valor, indice)=>{
            if(valor.edad>=16 && valor.edad<=65 && valor.sexo==='hombre'){ contador++;}
            
        });
        document.write(`Hay ${contador} hombres entre 16 y 65 años`);
    }
    let ingresarPersonas = (numDoc, anios, genero)=>{
        personas.push(
            {  
                dni: numDoc,
                edad: anios,
                sexo: genero
            }
        );
    };

    let visualizar = (datos) => {
        datos.forEach((valor, indice) => {
            document.write(`<p>Dni: ${valor.dni}</p>`);
            document.write(`<p>Edad: ${valor.edad}</p>`);
            document.write(`<p>Sexo: ${valor.sexo}</p>`);
            document.write(`<hr/>`);
        });
    };

    let introducir = () =>{
        let numDoc = prompt('Dni');
        while(numDoc != '0'){
            let anios = Number(prompt('Edad'));
            let genero = prompt('Sexo');
            if(numDoc != '0'){ 
                console.log('hola holaaa')
                ingresarPersonas(numDoc, anios, genero); 
            }
            
            numDoc = prompt('Dni');
        };

        
    }
    introducir();
    
    visualizar(personas);
    cantidadCensados();
    contarGenero();
    contarEdades();
});