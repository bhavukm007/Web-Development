// code1- adding 100 paras in code body by using append. 100 paras needed 100 reflows and 100 repaints
const t1=performance.now();
for(let i=1; i<=100;i++)
{
    let para=document.createElement("p");
    para.textContent="This is para"+i;
    document.body.appendChild(para);
}
const t2=performance.now();
console.log("total time to run code="+(t2-t1)); // check on console
// code2- adding 100 paras in div then appending div to the body. para is appended in div which is not needed to be shown on UI. however upon appending div in document we have to show on UI so there is 1 reflow and 1 repaint
const t3=performance.now();
let mydiv=document.createElement("div");
for(let i=1; i<=100;i++)
{
    let para=document.createElement("p");
    para.textContent="This is para"+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("total time to run code="+(t4-t3));
// code3- with document fragment
const t5=performance.now();
let fragment= document.createDocumentFragment();
for(let i=1; i<=100;i++)
{
    let para=document.createElement("p");
    para.textContent="This is para"+i;
    fragment.appendChild(para);
}    
document.body.appendChild(fragment); // it will take 1 reflow and 1 repaint
const t6=performance.now();
console.log("total time to run code="+(t6-t5));