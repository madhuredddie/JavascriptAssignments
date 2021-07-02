
function randNumFixed() {
    let num=Math.floor(Math.random()*100);  
  
    document.getElementById("para1").innerHTML = num
  }
  
  document.getElementById("btn1").addEventListener("click",randNumFixed);
  
  
  
  function randNum() {
   let min = Math.ceil(document.getElementById("input1").value)
   let max = Math.floor(document.getElementById("input2").value)
  
    let num = Math.floor(Math.random() * (max - min)) + min
  
    document.getElementById("para2").innerHTML = num
  }
  
  document.getElementById("btn2").addEventListener("click",randNum)
  
  
  // -3- Returns a long Lorem Ipsum String
  // Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."
  
  //document.getElementById("btn3").addEventListener("click", btn3Pressed)
  
  function btn3Pressed() {
    document.getElementById("para3").innerHTML = lorem
  }
  document.getElementById("btn3").addEventListener("click", btn3Pressed)
  
  
  // -4- Returns a Lorem Ipsum String based on the number or sentences specified
  //document.getElementsByName("rand")[0].addEventListener("change", randTyped0)
  document.getElementById("btn4").addEventListener("click", btn4Pressed)
  
  
  
  function btn4Pressed() {
      let num = Math.floor(document.getElementById("input3").value)
      let array = lorem.split(".");
      let p4 = ""
    for (let i = 0; i < num; i++) {
      p4 = p4 + " " + array[i] + "."
    }
    document.getElementById("para4").innerHTML = p4
  }
  
  
  // -5- Returns a Lorem Ipsum String based on the number or characters specified
  //document.getElementsByName("rand")[1].addEventListener("change", randTyped1)
  document.getElementById("btn5").addEventListener("click", btn5Pressed);
  
  
  function btn5Pressed() {
      let num=Math.floor(document.getElementById("input4").value)
    document.getElementById("para5").innerHTML = lorem.substring(0,num);
  }
  
  
  // -6- Returns the current date (formatted)
  document.getElementById("btn6").addEventListener("click", btn6Pressed)
  
  function btn6Pressed() {
    let newDate = new Date()
    let today = newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear()
    document.getElementById("para6").innerHTML = today
  }
  
  
  // -7- Returns the current time (formatted)
  document.getElementById("btn7").addEventListener("click", btn7Pressed)
  
  function btn7Pressed() {
    let newDate = new Date()
    let time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
    document.getElementById("para7").innerHTML = time
  }
  
  
  // -8- Converts Inches to Feet
  document.getElementById("btn8").addEventListener("click", btn8Pressed)
  
  
  
  function btn8Pressed() {
     let num=Math.ceil(document.getElementById("input5").value);
     let feet= num / 12;
    document.getElementById("para8").innerHTML =feet;
  }
  
  
  // -9- Converts Feet to Inches
  document.getElementById("btn9").addEventListener("click", btn9Pressed)
  
  function btn9Pressed() {
   let num =document.getElementById("input6").vaule;
   let inches = num * 12
    document.getElementById("para9").innerHTML = inches;
  }
  
  
  // -10- Compares if two words are the same length
  
  document.getElementById("btn10").addEventListener("click", btn10Pressed)
  
  
  function btn10Pressed() {
    let firstWord=document.getElementById("input7").value;
    let secondWord=document.getElementById("input8").value;
  
    if (firstWord.length == secondWord.length) {
      document.getElementById("para10").innerHTML = "The two words are of same length: " +firstWord + " and " + secondWord
    } else {
      document.getElementById("para10").innerHTML = "The two words are the different length: " +firstWord + " and " + secondWord
      
    }
  }
  
  
  // -11- Returns a random password
  document.getElementById("btn11").addEventListener("click", btn11Pressed)
  
  function btn11Pressed() {
    var randomstring = Math.random().toString(36).slice(-8);
    document.getElementById("para11").innerHTML = randomstring
  }
  
  
  // -12- Tells you if the number is even or odd
  document.getElementById("btn12").addEventListener("click", btn12Pressed)
  
  
  function btn12Pressed() {
      let num=Math.floor(document.getElementById("input9").value);
    if (num % 2 == 0) {
      document.getElementById("para12").innerHTML = num + " is even"
    } else {
      document.getElementById("para12").innerHTML = num + " is odd"
    }
  }
  
  
  // -13- Returns a random color
  document.getElementById("btn13").addEventListener("click", btn13Pressed)
  
  const colors = ["blue", "green", "red", "yellow", "magenta"]
  
  function btn13Pressed() {
   let min = Math.ceil(0)
   let max = Math.floor(colors.length)
  
    let num = Math.floor(Math.random() * (max - min)) + min
  
    document.getElementById("para13").innerHTML = "The text color now is " + colors[num]
    document.getElementById("para13").style.color = colors[num]
  }
  
  
  // -14- Returns a random first and last name
  document.getElementById("btn14").addEventListener("click", btn14Pressed)
  // Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
  const names =
  [
    {
      firstName: "madhu",
      lastName: "ganta"
    },
    {
      firstName: "pavan",
      lastName: "ganta"
    },
    {
      firstName: "nunny",
      lastName: "demi"
    },
    {
      firstName: "pullareddy",
      lastName: "guntaka"
    },
    {
      firstName: "sushanth",
      lastName: "bellamkonda"
    }
  ]
  
  function btn14Pressed() {
   let min = Math.ceil(0)
    let max = Math.floor(names.length)
  
    let num = Math.floor(Math.random() * (max - min)) + min
  
    document.getElementById("para14").innerHTML = "The name now is " + names[num].firstName + " " + names[num].lastName
  }