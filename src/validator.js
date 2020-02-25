const validator = {
  isValid : (creditCardNumber) => {    
      let sum = 0;
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
        sum = sum + n;  
        //console.log(suma);     
      }
      if (sum % 10 == 0) {        
        return true;
      }
      else {
        return false;
      }
    
  },

  maskify : (creditCardNumber) => {
    //CONVIRTIENDO 
    let creditCardNumber_converted = creditCardNumber.toString().split('');
    
    for (let i = creditCardNumber_converted.length - 1; i >= 0; i--) {
      
      if (i > creditCardNumber_converted.length - 5) {          
        //console.log( numero_convertido[i]);
      }
      else
      {
        creditCardNumber_converted[i] = '#';          
      }         
    }
    let join_creditCardNumber = creditCardNumber_converted.join('');  
    //console.log('numero es: '+ juntaNumeros);  
    return join_creditCardNumber;
  }
};

export default validator;
