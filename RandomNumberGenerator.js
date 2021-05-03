function randomNumberGenerator(min, max) {
    do {
      var x = Math.random() * 10
      if(Math.round(x)<max && Math.round(x)>min)
      {
          break;
      }

    } while (true)
  
    return Math.round(x)
  }
  
  console.log(randomNumberGenerator(2,8))