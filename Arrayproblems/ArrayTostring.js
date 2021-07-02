let array= ["hello","my","name","is","madhu"]
// function converts to string

function arrayToString(arr)
{
    let string= arr.join(" ");
    return string;
}
console.log(arrayToString(array));

//function converts string to 

let stringone= "hi i am madhu sudhan reddy"
  function stringToArray(str)
  {
      let arrayone=str.split(" ");
     // arrayone.shift();
      console.log(arrayone);
  }

  stringToArray(stringone)

