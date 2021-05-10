function multiplyWithNoDefaultValues(a, b) {
    return a * b
  }
  
  console.log(multiplyWithNoDefaultValues(5, 4) ); // it returns 10 values
  console.log(multiplyWithNoDefaultValues(5));     // it returns not a NaN !

  function multiplySetDefaultValues(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1
    return a * b
  }
  
 console.log(multiplySetDefaultValues(5, 3))  // it returns 10
  console.log(multiplySetDefaultValues(5));     // it returns 5

function multiplyDefaultParamValues(a, b = 1) {
    return a * b;
  }
  
  console.log(multiplyDefaultParamValues(5, 2));
  // expected output: 10
  
  console.log(multiplyDefaultParamValues(5));
  // expected output: 5
  