class human
{
    age=19;
    // making weight private
    #weight=60;
    height=5.10;
    // use of constructor
    constructor(newAge,newHeight,newWeight)
    {
        this.age=newAge;
        this.height=newHeight;
        this.#weight=newWeight;
    }
    walking()
    {
        console.log("walking",this.#weight); // this represents the current object
    }
    running()
    {
        console.log("running");
    }
    get fetchWeight()
    {
        return this.#weight;
    }
    set modifyweight(value)
    {
        this.#weight=value;
    }
}
let obj= new human(50,6.2,70);
console.log(obj.age);
console.log(obj.height);
console.log(obj.fetchWeight);
// defult parameter
function sayName(fName="Bhavuk",lName="Mahajan") //default parameter
{
    console.log("My name is",fName,lName);
}
sayName();
sayName("B")
sayName("Mr.","Mahajan");

function sayName1(firstName="Bhavuk",lastName=firstName.toUpperCase())
{
    console.log("My name is",firstName,lastName);
}
sayName1();
sayName1("B")
sayName1("Mr.","Mahajan");

function solve(value={age:19,weight:60,height:5.10,})
{
    console.log("hello",value);
}
solve(20);
solve("Bhavuk");
solve();

function solve1(value=["Bhavukm007","I'm Bhavuk"])
{
    console.log("hello",value);
}
solve1(20);
solve1("Bhavuk");
solve1();
solve1(null); // stores null
solve1(undefined); // undefined results in use of default value
// function as default parameter
function getAge()
{
    return 19;
}
function utility(name="Mr. Mahajan",age=getAge())
{
    console.log(name,"",age);
}
utility("Bhavuk",19);
utility();