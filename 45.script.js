// using return
// anything written after return statement will not execute. they are unreachable statements
function sum(a,b,c)
{
    let sum= a+b+c;
    return sum;
}
let ans=sum(2,3,4);
console.log(ans);

function fullname(firstname, lastname)
{
    return(firstname + lastname);
}
let myname= fullname("Bhavuk ", "Mahajan");
console.log(myname);
let myname1= fullname("Bhavukm", "007");
console.log(myname1);
let myname2= fullname("✨", " بھاوُک");
console.log(myname2);

// method to write function
let product= function(a,b)
{
    return a*b;
}
const ans1= product(2,4);
console.log(ans1);

// using arrow function
let exp=(x,y)=>
{
    let ans2=x**y;
    return ans2
}
console.log(exp(2,4))