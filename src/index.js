import validator from './validator.js';

//console.log(validator);

const btnCheck = document.getElementById("btn_check");

btnCheck.addEventListener('click', () => {
    
    let nambercreditcard = document.getElementById('namber_creditcard').value;
    let rev_nambercreditcard = (nambercreditcard.split('').reverse());
    //console.log('el reverso es: '+ rev_nambercreditcard);     


    //*******************************************************/
    //VERIFICAR SI ES VALIDA O NO
    let valid_card = validator.isValid(rev_nambercreditcard);
    if (nambercreditcard.length <= 16 && nambercreditcard.length>=1) {
        //*******************************************************/
        //ENMASCARAR EL NUMERO DE LA TARJETA
        let mask_card = validator.maskify(nambercreditcard);
        //console.log('enmascarada',mask_card);
        
        //CONTENEDORES
        const cont1 = document.getElementById('contenedor1');
        const cont2 = document.getElementById('contenedor2');
        cont2.style.display = 'none';

        //*********************************************** */
        const info = document.getElementById("saludo");
        info.innerHTML = 'Hola tu numero de tarjeta es: '+ mask_card;
        //info.innerHTML = 'Hola tu numero de tarjeta es: ############'+cadena;
        //console.log(info);
        cont2.style.display = 'block';
        cont1.style.display = 'none';

        //VERIFICANDO LO QUE ME RETORNA
        if (valid_card == true) {
            let conf_validacion = document.getElementById('accepted');            
            //conf_validacion.innerHTML = 'La tarjeta '+ type_card[i].value +' es valida ' + suma;
            conf_validacion.innerHTML = 'La tarjeta es valida ';
        } else {            
            const conf_validacion2 = document.getElementById('rejected');
            conf_validacion2.innerHTML = 'La tarjeta no es valida ';
        }
    }
    else {
        /*
        const alert = document.getElementById("alert_creditcard");
        alert.innerHTML = 'Ingresar numero';*/
        //console.log(alert);
        alert('Ingresar numero');
    }      
})

/*
//REEMPLAZAR CON CARACTERES DE NUMERAL '#' - USANDO SLICE
let cadena = nambercreditcard.slice(12,16);
console.log( '############'+cadena); 

//PROBANDO EL USO DEL SPLIT
let separar = nambercreditcard.split('');
console.log(separar);
*/