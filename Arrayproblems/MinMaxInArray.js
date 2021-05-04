function findMinMaxInArray(arr)
{
    let size=arr.length;
    let min = Infinity;
    let max= -Infinity;
    for(let i=0;i<size;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }

    console.log("In"+arr+ " minimum value is "+min+" and maximu value is"+max);
}

let array=[12,45,65,73,89,65,32,9]
findMinMaxInArray(array);