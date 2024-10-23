'use strict'
window.addEventListener("load", function (event) {
    let maniana = [18, 20, 33, 39, 100];
    let tarde = [18, 20, 54, 32, 24, 65];
    let noche = [13, 30, 34, 42, 24, 25, 43, 33, 23, 99, 91];
    let medias = () => {
        let cman = 0;
        let ctard = 0;
        let cnoch = 0;
        for (let i = 0; i < maniana.length; i++)
            cman = cman + maniana[i];
        for (let i = 0; i < tarde.length; i++)
            ctard = ctard + tarde[i];
        for (let i = 0; i < noche.length; i++)
            cnoch = cnoch + noche[i];

        document.write(`<p>Media de mañana: ${cman/maniana.length}<p/>`);
        document.write(`<p>Media de tarde: ${ctard/tarde.length}<p/>`);
        document.write(`<p>Media de noche: ${cnoch/noche.length}<p/>`);

        if ((cman/maniana.length)>(ctard/tarde.length)&&(cman/maniana.length)>(cnoch/noche.length)){ document.write(`<p>El turno de mañana tiene mayor media<p/>`);}
        else if((cman/maniana.length)<(ctard/tarde.length)&&(cnoch/noche.length)<(ctard/tarde.length)){document.write(`<p>El turno de tarde tiene mayor media<p/>`);}
        else if((cman/maniana.length)<(cnoch/noche.length)&&(cnoch/noche.length)>(ctard/tarde.length)){document.write(`<p>El turno de noche tiene mayor media<p/>`);}
    }
    medias();
});