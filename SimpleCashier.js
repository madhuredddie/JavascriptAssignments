function caluclateDifference(Amount ,paid)
{
    return paid-Amount
}
let totalAmount = 100
let paidAMount= prompt("how much money your are paying ?")
let balance = caluclateDifference(totalAmount,paidAMount)
if(balance==0)
{
    console.log("you have paid exact amount")

}
else if(balance>0)
{
    console.log("you have paid extra amount "+balance)
}

else{
    console.log("you arre short by "+ Math.abs(balance))
}


