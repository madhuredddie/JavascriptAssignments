function countVowel(str)
{
    let vowels="aAeEiIoOuU";
    if(str.length<=0)
    {
        return ;
    }
    let count=0;
     for(let i=0;i<str.length;i++)
     {
         if(vowels.indexOf(str[i])!==-1)
         {
            count=count+1;
         }
     }
     return count;
}

let string ="madhu";
console.log( " the no of vowels in "+string+" is" +countVowel(string));
  string ="aeiouAEIOU";
  console.log( " the no of vowels in "+string+" is" +countVowel(string));