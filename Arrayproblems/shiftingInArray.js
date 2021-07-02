// shifting elements with on the array from postion towards to position
function shiftArray(array,from, to)
{
    let temp = array[from];
    if(from==to)
    {
        return ;
    }
    else if(from>to)
    {
    for(let i= from;i>=to;i--)
    {
        array[i]=array[i-1];
    }
   }
   else{
    for(let i= from;i<to;i++)
    {
        array[i]=array[i+1];
    }
   }
    array[to]=temp;
}

let arr=["madhu","pavan","karthik","sushant","rahul"]

console.log("Arrya before shifting position "+arr);
 shiftArray(arr,4,2)
 console.log("Array after shifting position "+arr)


console.log("Arrya before shifting position "+arr);
shiftArray(arr,3,1)
console.log("Array after shifting position "+arr)


console.log("Arrya before shifting position "+arr);
shiftArray(arr,1,4)
console.log("Array after shifting position "+arr)