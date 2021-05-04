function numberToString(number)
{
    return number.toString()
}
function checkNumberPalindrome(number)
{
    let originalNumber=number;
    let stringNumber=numberToString(number)
    let size= stringNumber.length;
    let tempNum=0
    for(let i=0;i<size;i++)
    {
        tempNum=tempNum*10;
        tempNum=tempNum+Math.floor((number%10));
        number=number/10;
      //  console.log(tempNum)
    }

    if(originalNumber == tempNum)
     {
         return true;
     }
     else{
         return false;
     }

}
function testCheckNumberPalindrome(actual,expected)
{
    if(actual==expected)
    {
        console.log("test passed successfully");
    }
    else{
        console.log("test failed");
    }
}

testCheckNumberPalindrome(checkNumberPalindrome(12321),true)
testCheckNumberPalindrome(checkNumberPalindrome(1232456),true)
testCheckNumberPalindrome(checkNumberPalindrome(12345654321),true)
testCheckNumberPalindrome(checkNumberPalindrome(1232198),true)