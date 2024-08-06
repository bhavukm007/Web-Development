// math object
console.log(Math.PI);
console.log(Math.max(60,30,40,80,));
console.log(Math.min(60,40,30));
console.log(Math.round(1.6));
console.log(Math.round(1.4));
console.log(Math.floor(2.9));
console.log(Math.ceil(6.1));
console.log(Math.abs(-2.8));
console.log(Math.random()); //random value
console.log(Math.sqrt(5));
console.log(Math.pow(10,2));
//data object 
let curr= new Date();
console.log(curr);
let date= new Date('August 27 2004 8:10');
console.log(date);
let newDate= new Date(2004, 7, 27, 8); // month is 0 based indexing
console.log(newDate);
console.log(newDate.getDay());//5 means friday with sunday as 0
console.log(newDate.getFullYear());
console.log(newDate.setFullYear(2005));
console.log(newDate.getFullYear());