'use strict'
window.addEventListener("load", function (event) {
    let empleado = new Array();
    let importarEmpleados = (dni, name, age, gender, work) => {
        empleado.push({
            numeroDocumento: dni,
            nombre: name,
            edad: age,
            sexo: gender,
            puesto: work
        });
    }
    let visualizarEmpleados = () => {
        empleado.forEach((valor, indice) => {
            document.write(`<p>Numero de documento: ${valor.numeroDocumento}`);
            document.write(`<p>Nombre: ${valor.nombre}`);
            document.write(`<p>Edad: ${valor.edad}`);
            document.write(`<p>Sexo: ${valor.sexo}<p/>`);
            document.write(`<p>puesto: ${valor.puesto}<p/>`);
            document.write(`<hr>`);
        });
    }
    let buscarEmpleado = () => {
        let dniBuscar = prompt("Dni a buscar");
        if(empleado.find(e => e.numeroDocumento == dniBuscar)){
            document.write(`<p>Encontrado<p/>`);
        }else{
            document.write(`<p>No encontrado<p/>`);

        }
    }
    let agregarEmpleado = () => {
        let dni = prompt("Dni del nuevo empleado");
        let nombre = prompt("Nombre del nuevo empleado");
        let edad = Number(prompt("Edad del nuevo empleado"));
        let sexo = prompt("Sexo del nuevo empleado");
        let puesto = prompt("Puesto del nuevo empleado");
        importarEmpleados(dni, nombre, edad, sexo, puesto);
    }
    let eliminarEmpleado = () => {
        let dniBuscar = prompt("Dni a eliminar");
        let indice = empleado.findIndex(e => e.numeroDocumento == dniBuscar);
        if(empleado.splice(indice, 1)){
            document.write(`Eliminado correctamente`);
        }else{
            document.write(`Error eliminado`);
        }
    }
    let cargaEstatica = () => {
        let datos = `12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora`;

            let datosPegados = datos.trim();
            let datosSeparados = datosPegados.split('\n');
            console.log(datosSeparados);
            datosSeparados.forEach((valor, indice) => {
                // console.log('indice '+ indice + ' valor '+ valor);
                let fila = datosSeparados[indice].split(',');
                console.log(fila);
                importarEmpleados(fila[0], fila[1], Number(fila[2]), fila[3], fila[4]);
            });
            visualizarEmpleados(); 
        
    }

    cargaEstatica();
    visualizarEmpleados();
    setTimeout(() => {
        buscarEmpleado();
    
        setTimeout(() => {
            agregarEmpleado();
            
            document.write(`<hr>`);
            document.write(`<hr>`);
            document.write(`<hr>`);

    
            setTimeout(() => {
                eliminarEmpleado();
                visualizarEmpleados();
    
            //     setTimeout(() => {
            //         visualizarEmpleados();
            //     }, 1000);
    
            }, 1000);
    
        }, 1000);
    
    }, 1000);
    
    
});



// 12345,Javier Arias Carroza,45,Masculino,Gerente
// 67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
// 11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
// 44556,Jose Luis del Valle del Pino,50,Masculino,Contador
// 33445,David Fariña Morena,40,Masculino,Diseñador
// 22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
// 56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
// 34567,Angel Guiberteau Franco,47,Masculino,Administrador
// 12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
// 67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
// 99887,Ceus Martin Llera,29,Masculino,Asistente
// 77665,Celia Moruno Herrojo,32,Femenino,Analista
// 55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
// 66778,Mauricio Peña Dominguez,36,Masculino,Auditor
// 88777,Carlos Rodriguez Botello,45,Masculino,Programador
// 33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
// 99123,David Silva Vega,35,Masculino,Soporte Técnico
// 78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
// 66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
// 11234,Maria Vidigal Barroso,30,Femenino,Contadora