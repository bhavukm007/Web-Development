// dynamic nature of object.we can change state at runtime
// source method
let obj=
{
    age:19,
    weight:60,
    height:5.10
};
console.log(obj);
obj.colour="white";
console.log(obj);
// cloning
let obj1={...obj};
obj.age=20;
console.log(obj);
console.log(obj1);
// copying
let obj2=obj;
console.log(obj2);
// assign method
let src=
{
    age1:19,
    weight1:50,
    height1:5.1
};
let src2=
{
    avalue:100,
    name:"Bhavuk Mahajan"
};
let destination= Object.assign({},src);
src.age1=20;
console.log(src);
console.log(destination);
let destination1= Object.assign({},src,src2);
console.log(destination1)
// iteration method
let src3=
{
    age2:190,
    weight2:500,
    height2:5.11
};
let dest={};
for(let key in src3)
{
    let newKey=key;
    let newValue=src3[key];
    // insert new key and value in dest and create a clone
    dest[newKey]=newValue;
}
src3.age2=200;
console.log(src3);
console.log(dest);