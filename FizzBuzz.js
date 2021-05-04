function checkFizzbuzz(start,end)
{
    for(let i=start;i<=end;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log("Fizzbuzz");
            
        }
        else if(i%3==0)
        {
            console.log("Fizz");
        }

        else if(i%5==0)
        {
            console.log("Buzz");

        }

        else
        {
            console.log(i);
        }
    }
}

checkFizzbuzz(1,15)
checkFizzbuzz(40,45)