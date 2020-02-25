import validator from './validator.js';

const btnCheck = document.getElementById("btn_check");

btnCheck.addEventListener('click', () => {
    
    let nambercreditcard = document.getElementById('namber_creditcard').value;
    let rev_nambercreditcard = (nambercreditcard.split('').reverse());
    //console.log('el reverso es: '+ rev_nambercreditcard);     

    //*******************************************************/
    //VERIFICAR SI ES VALIDA O NO
    let valid_card = validator.isValid(rev_nambercreditcard);
    if (nambercreditcard.length <= 16 && nambercreditcard.length>=1) {
                
        //VERIFICANDO LO QUE ME RETORNA
        if (valid_card == true) {

            //CONTENEDORES - USANDO CLASSLIST
            const cont1 = document.getElementById('container1');
            const cont2 = document.getElementById('container2');
            cont1.classList.add('hide_container');
            cont2.classList.remove('hide_container');
            
            /*********** MOSTRANDO CONTENEDOR 2 
            cont2.style.display = 'block';
            cont1.style.display = 'none';*/

            //*******************************************************/
            //ENMASCARAR EL NUMERO DE LA TARJETA
            let mask_card = validator.maskify(nambercreditcard);
            //console.log('enmascarada',mask_card);
                        
            const info = document.getElementById("mask_creditCardNumber");
            info.innerHTML =  mask_card; /* enviando el numero enmascarado */
            
            //*********************************************** */
            // CAPTURANDO EL VALOR DE LOS SELECT - MESES Y AÑO DE EXPIRACION
            const months_value = document.getElementById("months").value;
            const meses = document.getElementById('months_v');
            meses.innerHTML = months_value;

            const years_value = document.getElementById("years").value;
            const años = document.getElementById('years_v');
            años.innerHTML = years_value;

            //CAPTURANDO EL VALOR DE EL CVC - CVV
            const code_cvc = document.getElementById("cvc_card").value;
            const cod_cvc = document.getElementById("cvc_v");
            cod_cvc.innerHTML = code_cvc;
            

            //CAPTURANDO EL VALOR DE LOS INPUT TYPE=RADIO
            let radio_v = "";
            const radio_value = document.getElementsByName("tipos");
            for (let i = 0; i < radio_value.length; i++) {
                if (radio_value[i].checked) {
                    radio_v = radio_value[i].value;
                }
                
            }
            const tipo_c = document.getElementById("type_v");
            tipo_c.innerHTML = radio_v;

            let conf_validacion = document.getElementById('accepted');            
            //conf_validacion.innerHTML = 'La tarjeta '+ type_card[i].value +' es valida ' + suma;
            conf_validacion.innerHTML = 'LA TARJETA ES VALIDA ';

        } 
        else {           
            const conf_validacion2 = document.getElementById('rejected');
            conf_validacion2.innerHTML = 'LA TARJETA NO ES VALIDA '; 
        }
    }
    else {        
        const alert = document.getElementById("alert_creditcard");
        alert.innerHTML = 'Ingresar numero';
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