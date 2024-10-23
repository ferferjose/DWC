'use strict'
window.addEventListener("load", function (event) {
    
    let importarEmpleados = (empleado, numeroDocumento, nombre, edad, sexo, puesto) => {
        empleado.push({
            numeroDocumento,
            nombre,
            edad,
            sexo,
            puesto
        });
        return empleado;
    }
    let cargarDatos = (data, empleado) => {
        let datosPegados = data.trim();
            let datosSeparados = datosPegados.split('\n');
            // console.log(datosSeparados);
            datosSeparados.forEach((valor, indice) => {
                // console.log('indice '+ indice + ' valor '+ valor);
                let fila = datosSeparados[indice].split(',');
                // console.log(fila);
                empleado = importarEmpleados(empleado, fila[0], fila[1], Number(fila[2]), fila[3], fila[4]);
            });

            return empleado;
    }
    let mostrarEmpleados = (empleado) => {
        empleado.forEach((valor, indice) => {
            document.write(`<p>Numero de documento: ${valor.numeroDocumento}`);
            document.write(`<p>Nombre: ${valor.nombre}`);
            document.write(`<p>Edad: ${valor.edad}`);
            document.write(`<p>Sexo: ${valor.sexo}<p/>`);
            document.write(`<p>puesto: ${valor.puesto}<p/>`);
            document.write(`<hr>`);
        });
    }


    let cargarDocumento = () =>{
        let empleado = [];
        fetch('empleados2DAW.txt')
            .then(response => {
                // console.log(data);
                if(!response.ok){
                    throw new Error('Error al cargar el archivo');
                }
                return response.text();
            })
            .then(data => {
                // console.log(data);
                empleado = cargarDatos(data, empleado);
                // console.log(data);
                mostrarEmpleados(empleado);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }
    
    cargarDocumento();
});