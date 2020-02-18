import validator from './validator.js';

//console.log(validator);

const btnCheck = document.getElementById("btn_check");

btnCheck.addEventListener('click', () => {
    
    let nambercreditcard = document.getElementById('namber_creditcard').value;
    let rev_nambercreditcard = (nambercreditcard.split('').reverse());
    //console.log('el reverso es: '+ rev_nambercreditcard);
    let tarjetaValida = validator.isValid(rev_nambercreditcard);

    let tarjetaenmascarada = validator.maskify(nambercreditcard);
    console.log('enmascarada',tarjetaenmascarada);
    

    //CONTENEDORES
    const cont1 = document.getElementById('contenedor1');
    const cont2 = document.getElementById('contenedor2');
    cont2.style.display = 'none';

    //*********************************************** */
    //SI SON MENORES QUE 16 DIGITOS
    console.log(nambercreditcard);
    const info = document.getElementById("saludo");
    info.innerHTML = 'Hola tu numero de tarjeta es: '+ tarjetaenmascarada;
    //info.innerHTML = 'Hola tu numero de tarjeta es: ############'+cadena;
    console.log(info);
    cont2.style.display = 'block';
    cont1.style.display = 'none'; 
    if (tarjetaValida == true) {
        alert('es valida');
    }
    else{
        alert('no es valida');
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