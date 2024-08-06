// when used outside function age is globally available 
// var age=25;
// if(true)
//     {
//         console.log(age);
//     }

// now writing inside a function
// function solve()
// {
//     var age=25;
//     console.log(age);
// }
// solve()

// upon using age outside the function we get error
// function solve()
// {
//     var age=25;
//     console.log(age);
// }
// console.log(age);
// solve()

// var can be redeclared but results in debuggiong issues. try to avoid var
// var x=10;
// console.log(x);
// var x=20;
// console.log(x);
// var x="Bhavuk";
// console.log(x);

// using let variable. not accessible outside the block
// {
//     let a=10;
// }
// console.log(a);

// working of var
// let b=10;
// console.log(b);

// redeclaration is not possible
// let a=10;
// console.log(a);
// let a=20;
// console.log(a);

// reassignment is possible
// let a=10;
// console.log(a);
// a=20;
// console.log(a);
// a="Bhavuk";
// console.log(a);

// using const
// const a=10;
// console.log(a);
// a=20;
// console.log(a);

// undefined datatype
// let marks;
// console.log(marks);

// null datatype
// let marks=null;
// console.log(marks);

// big integer datatype
// let marks=999569798999999662355679997786999688699444999994765835566575738347777777777777777777777777777777777777777777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;
// console.log(marks);

// check the datatype
// marks=false;
// console.log(typeof(marks));
// marks=null;
// console.log(typeof(marks));
// let marks;
// console.log(typeof(marks));
// marks=999569798999999662355679997786999688699444999994765835566575738347777777777777777777777777777777777777777777777777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;
// console.log(typeof(marks));
