function compareArray(array) {
    let counter= 0
  
    for (let i = 1; i < array.length; i++) {
      const first = array[0]
      
      if (first ===array[i]) {
        counter= counter + 1
      } 
    }
  
    return counter
  }
  
  
  function testCompareArray(array, expected) {
    let actual = compareArray(array)
  
    if (expected.toString() == actual.toString()) {
      console.log(" CompareArray Passed. " + actual + " is equal expected " + expected)
    } else {
      console.log("ompareArray Failed.  " + actual + " is not equal expected " + expected)
    }
  }
  
  testCompareArray([1, 1, 2, 3, 1, 5, 2, 4, 6, 1], 3);
  testCompareArray([1, -1, 3, -2, 1], 1);
  testCompareArray([1, "a", 3, -2, 1], 1);
  testCompareArray(["1", "a", "3", -2, 1], 1);
  
  