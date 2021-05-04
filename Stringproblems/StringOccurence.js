function countOccurencesOfCharacter( str )
{
  // checking string is valid or not 
  if( str.length == 0 )
  {
    console.log("give string")
    return;
  }
  //cor loop to iterate over strign
  for( let i = 0 ;i < str.length ;i++)
  { 
    //variable counting ocurrence 
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j] && i > j  )
      {
       break;
      }
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(` In ${str} ${str[i]} occurs ${count} times`);
      
  }
  
}
  
// test string
let string = "madhu";
countOccurencesOfCharacter(string);
string="twilight"
countOccurencesOfCharacter(string);
