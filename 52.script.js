// compile time error
// console.log(1;)  // syntax error
// runtime error
// console.log(x);  // reference error
// error handling
try // in try block we write the code in which eror can come
{
    console.log("try block starts");
    console.log(x);   
    console.log("try block ends");
}
catch(err) // if error comes catch will hold the error. e is a variable/name to error
{
    // we define the tsk to be done on error in this block. retry logic, fallback mechanism, custom error, logging, etc.
    console.log("inside catch block");
    console.log("your error is here",err);
}
// finally block means it will run everytime whether error comes or not
finally
{
    console.log("runs everytime");
}
// throw is used to create custom errors on your own
try
{
    console.log(y);
}
catch(error)
{
    // throw new Error("Custom error!!"); // creating error object
}

let errorCode=100;
if(errorCode==100)
{
    throw new Error("Invalid Json");
}