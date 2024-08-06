// passing function as arguement
function greetMe(greet, fullName)
{
    console.log("hello",fullName)
}
function greet()
{
    console.log("Hello");
}
// greet();
greetMe(greet,"Bhavuk");
// function returning a function
function solve(number)
{
    return function(number)
    {
        return number*number;
    }
}
let ans=solve(5); // ans has the function in it which is returned
console.log(ans);
let finalAns= ans(10); // 10*10
console.log(finalAns);
// storing function in data structures
// creating array of functions
const arr=
[
    function(a,b)
    {
        return a+b
    },
    function(a,b)
    {
        return a-b
    },
    function(a,b)
    {
        return a*b
    },
];
let first=arr[0]; // use 1 and 2 as well
let ans1=first(5,10);
console.log(ans1);
// function inside object
let obj=
{
    age:25,
    weight:60,
    height:5.10,
    greet:()=>
    {
        console.log("Hello");
    }
}
console.log(obj.age);
obj.greet();
// variable hosisting using function
console.log(great)
var great=function()
{
    console.log("Hello");
}