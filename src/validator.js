const validator = {
  isValid : (creditCardNumber) => {    
      let suma = 0;
      let n = 0;
      for (let i = 0; i <creditCardNumber.length; i++) {
        /*         
        const element = creditCardNumber[i];        
        console.log('['+ i + '] -> ' + element);*/
        if (i%2 == 0) {            
            n = (creditCardNumber[i]- '0');
        }
        else {
            n = (creditCardNumber[i]-'0')*2
            //console.log('(*2) ->' + n);
            if (n >= 10) {
              n = (n - 10) + 1;
              //console.log('sum>10 ->'+n);
            }
        }
        suma = suma + n;  
        //console.log(suma);     
      }
      if (suma % 10 == 0) {        
        return true;
      }
      else {
        return false;
      }
    
  },

  maskify : (creditCardNumber) => {
    //CONVIRTIENDO 
    let numero_convertido = creditCardNumber.toString().split('');
    
    for (let i = numero_convertido.length - 1; i >= 0; i--) {
      
      if (i > numero_convertido.length - 5) {          
        //console.log( numero_convertido[i]);
      }
      else
      {
        numero_convertido[i] = '#';          
      }         
    }
    let juntaNumeros = numero_convertido.join('');  
    //console.log('numero es: '+ juntaNumeros);  
    return juntaNumeros;
  }
};

export default validator;
