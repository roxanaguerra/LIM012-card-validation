// eslint-disable-next-line import/extensions
import validator from './validator.js';

const btnCheck = document.getElementById('btn_check');

btnCheck.addEventListener('click', () => {
  const numberCreditCard = document.getElementById('namber_creditcard').value;
  const revNumberCreditCard = (numberCreditCard.split('').reverse());
  // console.log('el reverso es: '+ rev_nambercreditcard);

  // *******************************************************/
  // VERIFICAR SI ES VALIDA O NO
  const validCard = validator.isValid(revNumberCreditCard);
  if (numberCreditCard.length <= 16 && numberCreditCard.length >= 1) {
    // VERIFICANDO LO QUE ME RETORNA
    if (validCard === true) {
    // CONTENEDORES - USANDO CLASSLIST
      const cont1 = document.getElementById('container1');
      const cont2 = document.getElementById('container2');
      cont1.classList.add('hide_container');
      cont2.classList.remove('hide_container');

      /* ********** MOSTRANDO CONTENEDOR 2
      cont2.style.display = 'block';
      cont1.style.display = 'none'; */

      // *******************************************************/
      // ENMASCARAR EL NUMERO DE LA TARJETA
      const maskCard = validator.maskify(numberCreditCard);
      // console.log('enmascarada',mask_card);

      const info = document.getElementById('mask_creditCardNumber');
      info.innerHTML = maskCard; /* enviando el numero enmascarado */

      // *********************************************** */
      // CAPTURANDO EL VALOR DE LOS SELECT - MESES Y AÑO DE EXPIRACION
      const monthsValue = document.getElementById('months').value;
      const meses = document.getElementById('months_v');
      meses.innerHTML = monthsValue;

      const yearsValue = document.getElementById('years').value;
      const años = document.getElementById('years_v');
      años.innerHTML = yearsValue;

      // CAPTURANDO EL VALOR DE EL CVC - CVV
      const codeCvc = document.getElementById('cvc_card').value;
      const codCvc = document.getElementById('cvc_v');
      codCvc.innerHTML = codeCvc;

      // CAPTURANDO EL VALOR DE LOS INPUT TYPE=RADIO
      let radioV = '';
      const radioValue = document.getElementsByName('tipos');
      for (let i = 0; i < radioValue.length; i += 1) {
        if (radioValue[i].checked) {
          radioV = radioValue[i].value;
        }
      }
      const typeCreditCard = document.getElementById('type_v');
      typeCreditCard.innerHTML = radioV;
      const confValidacion = document.getElementById('accepted');
      // conf_validacion.innerHTML = 'La tarjeta '+ type_card[i].value +' es valida ' + suma;
      confValidacion.innerHTML = 'LA TARJETA ES VALIDA ';
    }
    else {
      const confValidacion2 = document.getElementById('rejected');
      confValidacion2.innerHTML = '**LA TARJETA NO ES VALIDA**';
    }
  }
  else {
    const alert = document.getElementById('alert_creditcard');
    alert.innerHTML = '**Ingresar numero';
  }
});

/*
//REEMPLAZAR CON CARACTERES DE NUMERAL '#' - USANDO SLICE
let cadena = numberCreditCard.slice(12,16);
console.log( '############'+cadena);

//PROBANDO EL USO DEL SPLIT
let separar = numberCreditCard.split('');
console.log(separar);


/* function sumita(p1, p2) {
  const resultado = p1 + p2;
  return resultado;
}

//Invocar a la función
sumita(1,2) // 3


describe('algo', ()=>{})
 */
