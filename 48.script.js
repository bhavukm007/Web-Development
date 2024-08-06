class human
{
    age=19;
    // making weight private
    #weight=60;
    height=5.10;
    walking()
    {
        console.log("walking",this.#weight); // this represents the current object
    }
    running()
    {
        console.log("running");
    }
    get fetchWeighty()
    {
        return this.#weight;
    }
    set modifyweight(value)
    {
        this.#weight=value;
    }
}
let obj= new human();
console.log(obj.age);
obj.walking();
// console.log(obj.#weight);
