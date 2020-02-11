  const cont1 = document.getElementById('contenedor1');
  const cont2 = document.getElementById('contenedor2');
  cont2.style.display = 'none';

  function check_creditcard(){
    let nambercreditcard ;
    nambercreditcard = document.getElementById('namber_creditcard').value;
    nambercreditcard[16]
    /*const numerosp = [nambercreditcard];*/
    console.log(nambercreditcard);
    const info = document.getElementById("saludo");
    info.innerHTML = 'Hola tu numero de tarjeta es: '+ nambercreditcard;
    cont2.style.display = 'block';
    cont1.style.display = 'none';
    //const numerosp = [];
    //console.log('\u{1F60D}'); //emoticon con UNICODE

    let suma = 0;
    let n = 0;

    for (let i = 0; i <nambercreditcard.length; i++) {        
        const element = nambercreditcard[i];        
        //console.log(numerosp);
        console.log('['+ i + '] -> ' + element);
        if (i%2 == 0) {
            n = (nambercreditcard[i]-'0')*2
            console.log('(*2) ->' + n);
            if (n >= 10) {
                n = (n - 10) + 1;
                console.log('sum>10 ->'+n);
            }
        }
        else
        {
            n = (nambercreditcard[i]- '0');
        }
        suma = suma + n;  
        //console.log(suma);     
    }
    //probando si es valida o no
    if (suma % 10 == 0) {
        console.log('valida ' + suma);
        const conf_validacion = document.getElementById('validacion');
        conf_validacion.innerHTML = 'La tarjeta es valida ' + suma;

    }
    else
    {
        console.log('no es valida ' + suma);
        const conf_validacion2 = document.getElementById('validacion2');
        conf_validacion2.innerHTML = 'La tarjeta no es valida '+ suma;
    }
  }

const validator = {
  // ...
  //console.log('mensaje de prueba');

  
  };

export default validator;
