// creating an object
let obj={
    name1:"Bhavuk Mahajan",
    "name2":"Bhavuk Mahajan",
    // full name3:"Bhavuk Mahajan", //gives error if "" not used for full name3 because of space
    "full name3":"Bhavuk Mahajan",
    greet: function()
    {
        console.log("Hello everyone");
    }
};
console.log(obj);
obj.greet();
console.log(typeof(obj))

// map in array
let arr=[10,20,30];
arr.map((num,index)=>
{
    console.log(num,index);
})

// filter in array
let arr1=[10,29,30,41,51,62];
let evenarr=arr1.filter((num)=>
{
    if(num%2 == 0)
    {
        return true;
    }
    else
    {
    return false;
    }
});
console.log(evenarr);
// filter an array with different data types
let arr2=[10,20,"Bhavuk",true];
let ans=arr2.filter((value)=>
{
    if(typeof(value)=== 'string') // "number" and "boolean" can be checked
    {
        return true;
    }
    else
    {
        return false;
    }
});
console.log(ans);
// use of reduce
let arr3=[10,20,30,40];
let ans2=arr3.reduce((acc,curr)=>
{
    return acc+curr;
},0); // 0 is the initial value of arr
console.log(ans2);
// sort
let arr4=[9,6,8,4,3,0,10];
arr4.sort();
console.log(arr4);
let arr5=[9,6,8,4,3,0,10];
arr5.sort((a,b)=>a-b);
console.log(arr5);
let arr6=[9,6,8,4,3,0,10];
arr6.sort((a,b)=>b-a);
console.log(arr6);
// indexOf function
console.log(arr6.indexOf(9));
// find function
let arr7 = [5, 12, 8, 130, 44];
let found = arr7.find((value) => value > 15);
console.log(found);
// for each loop
let arr8=[10,20,30];
arr8.forEach((value,index) => {
    console.log("number",value,"index",index);
});
// for in loop is used to iterate on enumerable properties
let obj1={
    name1:"Bhavuk Mahajan",
    "name2":"Bhavuk Mahajan",
    "full name3":"Bhavuk Mahajan",
    greet: function()
    {
        console.log("Hello everyone");
    }
};
for(let key in obj1)
    {
        console.log(key," ", obj[key])
    }
// for of loop is used on iterable objects like arrays and stroings
let array=[10,20,30,40];
for(let value of array)
{
    console.log(value);
}

let fullName="Bhavuk Mahajan"
for(let value of fullName)
{
    console.log(value)
}
// array in function
let array1=[10,20,30,40];
function sum(array1)
{
    let length= array1.length;
    let sum=0;
    for(let index=0;index<length;index++)
    {
        sum=sum+array1[index];
    }
    return sum;
}
let totalSum=sum(array1);
console.log(totalSum);
// for each in array and function
let array2=[10,20,30,40,50];
function getSum(array2)
{
    let addition=0;
    array2.forEach((value)=>
    {
        addition=addition+value;
    })
    return addition;
}
let totalSum1=getSum(array2);
console.log(totalSum1);