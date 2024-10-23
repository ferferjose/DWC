// 9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
// En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
// corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
// datos debe finalizar al ingresar un valor negativo en el número de cuenta.
// Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

// a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
// según su saldo, sabiendo que:
// Estado de la cuenta 'Acreedor' si el saldo es >0.
// 'Deudor' si el saldo es <0.
// 'Nulo' si el saldo es =0.

// b) La suma total de los saldos acreedores.
'use strict'
window.addEventListener("load", function (event) {
    let datos = new Array();

    let estado = (saldo) => {
        if(saldo>0) return 'Acreedor'
        else if(saldo=0) return 'Nulo'
        else return 'Deudor'
    }
    
    let ingresarCuentas = (cuentaUsuario, nombreUsuario, saldoUsuario)=>{
        datos.push(
            {  
                numeroCuenta: cuentaUsuario,
                nombreCliente: nombreUsuario,
                saldo: saldoUsuario,
                estadoCuenta: estado(saldoUsuario)
            }
        );
    }

    let visualizar = (datos) => {
        datos.forEach((valor, indice) => {
            document.write(`<p> Numero de cuenta: ${valor.numeroCuenta}</p>`);
            document.write(`<p> Nombre cliente: ${valor.nombreCliente}</p>`);
            document.write(`<p> Estado Cunta: ${valor.estadoCuenta}</p>`);
            document.write(`<p> Saldo: ${valor.saldo}€</p>`);
            document.write(`<hr/>`);
        });
    };

    let introducir = () =>{
        let numCuenta = prompt('Numero de cuenta');
        while(numCuenta >= 0){
            let nombCuenta = prompt('Nombre de cuenta');
            let saldito = Number(prompt('Saldo de cuenta'));
            if(numCuenta >= 0){
                ingresarCuentas(numCuenta, nombCuenta, saldito);
            }
            numCuenta = prompt('Numero de cuenta');
        }
    }
    introducir()
    visualizar(datos);
});