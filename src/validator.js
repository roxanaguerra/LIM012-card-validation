const validator = {
  isValid: (creditCardNumber) => {
    let sum = 0;
    let multiply = 0;
    for (let i = 0; i < creditCardNumber.length; i += 1) {
      if (i % 2 === 0) {
        // multiply = parseInt(creditCardNumber[i]);
        multiply = (creditCardNumber[i] - '0');
      }
      else {
        // multiply = parseInt(creditCardNumber[i]) * 2;
        multiply = (creditCardNumber[i] - '0') * 2;
        // console.log('(*2) ->' + multiply);
        if (multiply >= 10) {
          multiply = (multiply - 10) + 1;
          // console.log('sum>10 ->'+multiply);
        }
      }
      sum += multiply;
      // console.log(suma);
    }
    if (sum % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify: (creditCardNumber) => {
    // CONVIRTIENDO
    const creditCardNumberConverted = creditCardNumber.toString().split('');
    for (let i = creditCardNumberConverted.length - 1; i >= 0; i -= 1) {
      if (i > creditCardNumberConverted.length - 5) {
        // console.log( numero_convertido[i]);
      }
      else {
        creditCardNumberConverted[i] = '#';
      }
    }
    const joinNumberCreditCard = creditCardNumberConverted.join('');
    // console.log('numero es: '+ juntaNumeros);
    return joinNumberCreditCard;
  },
};
export default validator;
