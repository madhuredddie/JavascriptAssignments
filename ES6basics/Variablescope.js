var name="madhu";
let name1="pavan";
const name2="karthik";
console.log("var name is "+name +" in global");
console.log("let name1 is "+name1+" in global");
console.log("const name2 is "+name2)+" in global";
let age=16
 if(age>12)
 {
     name="raju"
     console.log("var name is "+name+" in if block");// it prints raju in block scope
     name1="mani";
     //name2="pradeep"; ii gives error as assigning to the constant variable
     console.log("let name1 is "+name1+" in if block");// it prints rajesh since let is block scope
     console.log("const name2 is "+name2+" in if block"); //it gives error because const variable cant be reassigned
 }       
 
 console.log("var name is "+name +" outside if block");
console.log("let name1 is "+name1+" outside if block");
console.log("const namee is "+name2+" outside if block");

function printNames()
{
    let className="orbit";
    console.log("let className in "+className +"in function block");
    name1="rajesh";
    name="lokesh";
    var name4="sushanth";
    console.log("var name is "+name+" in function block");
    console.log("let name1 is "+name1+" in function block")
    console.log("var name4 is "+name4+" in function block")
}

printNames()
//console.log(className); cant acces the className because it is decalred in functional scope
console.log("let name1 is "+name1+" outside function block");
console.log("var name is "+name+" outside function block");
//console.log(name4+" outside function block")