let a=20;
let b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a**b);
console.log(a/b);
console.log(a%b);
--a;
--b;
console.log(a+b);
console.log(a<b);
console.log(a>=b);
// loose equality
console.log(5==5)
// string can be represented by both ''/""
console.log("5"==5)
// strict equality
console.log(5===5)
console.log("5"===5)
console.log("5"!==5)
console.log(5<<1);
console.log(5>>1);

let firstName="Bhavuk";
let lastName="Mahajan";
console.log(firstName+lastName);
console.log(firstName, lastName);
console.log(firstName,lastName);
let name1="Bhavuk Mahajan"
console.log(name1);
// upon using ''/"" in 2 lines returns unexpected token error
// let name2="Bhavuk 
// Mahajan"
// console.log(name2);
// let name3='Bhavuk 
// Mahajan'
// console.log(name3);
// we can use back ticks `` or template strings
let name4=`Bhavuk Mahajan`
console.log(name4)
let name5=`Bhavuk
Mahajan`
console.log(name5)
let name6=`Hii!!
   I am
Bhavuk Mahajan`
console.log(name6)
// using new String
let name7= new String("Bhavuk Mahajan");
console.log(name7)

// operations on strings
// concatenation using +
let op1="English "
let op2="Hindi "
let ans=op1+op2;
console.log(ans);
// using ``
let op3=`English `
let op4=`Hindi `
let ans1=`${op3}+op4`
console.log(ans1)
let ans2=`${op3}+ ${op4}`
console.log(ans2)
let ans3=`${op3}${op4}`
console.log(ans3)

// length of string
console.log(op2.length);

// upper and lower case
let op5=`HINDI `
console.log(op1.toUpperCase());
console.log(op5.toLowerCase());

// substring
let str="Hello BHavuk this side"
console.log(str.substring(2))
console.log(str.substring(2,9)) //9 is excluded

// split method to break string at specific position and returns multiple strings
let sentence="hello guys how are you";
let words=sentence.split(" ");
console.log(words);
// use of \ in string
// let sentence1="hello "guys" how are you"   //it returns error
let sentence2="hello \"guys\" how are you";
console.log(sentence2);
// backslash means treat th next character as normal and not a specific character. os here we will use 1 more \ so as to treat \ as normal characater
let sentence3="hello \\guys \\how \\are \\you";
let words1=sentence3.split("\\");
console.log(words1);
// joining the words. it is basically used on arrays
console.log(words);
console.log(words1.join(',')); //joining using ,
console.log(words1.join('--'));