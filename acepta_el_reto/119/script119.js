'use strict'

console.log('js cargado');
console.log(datosEntrada);

const arrayDatosEntrada = parsear(datosEntrada);
const numDatosEntrada = arrayDatosEntrada.length;
console.log(numDatosEntrada + " Tamaño");

for(let i = 0; i < numDatosEntrada; i++){
    const numLegionarios = Number(arrayDatosEntrada[i]);
    let numEscudos = calcularEscudosCuadrado(numLegionarios);
    console.log(numEscudos);
    
}

function parsear(datos){
    return datos.split('\n');
}

function calcularEscudosCuadrado(numLegionarios){
    if(numLegionarios > 4)
            return 12 + calcularEscudosCuadrado(numLegionarios - 4)
    if(numLegionarios === 4){
        return 12
    }
    return numLegionarios * 5
}

console.log(arrayDatosEntrada);





let escudosTotales = ejercicio();

console.log(escudosTotales);




function ejercicio (){
    let i = 0;
    let numSoldados = 2;
    let aux = numSoldados;
    let cuadrado;
    let escudos = 0;
    
    
    while(i*i < numSoldados){
        i++;
    }
    
    while(i>0){ //Mientras i sea mayor que 0
        if(i*i < aux){ //Si el cuadrado del numero es menor que el numSoldados
            aux = aux - i*i; //aqui se resta los que usamos para el cuadrado
            cuadrado = i-2;
            console.log("vueltas");
            
            console.log(`los lados son ${cuadrado}`);
            
            let usados = 0;
            if(cuadrado > 0){
                escudos = escudos + 4*3; //Escudos de las esquinas
                console.log(`los usados son ${usados}`);
                escudos = escudos + cuadrado * 4* 2; //Escudos de los laterales
                usados = 4 + cuadrado*4; //Usados de esquinas y lados FALLO AQUI CREO
                console.log(`los usados son ${usados}`);
                let restantes = i*i - usados;
                escudos = escudos + restantes;
                console.log(`los restantes son ${restantes}`);
                console.log(`los escudos son ${escudos}`);
            }
            if(cuadrado == 1)
                escudos = escudos + 5;
                
        }
        i--;
    }
    if(numSoldados==1)
        escudos = escudos + 5;

    return escudos
    
}
