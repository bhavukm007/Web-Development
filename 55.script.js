// applying rvrnt lostner
// function changeText()
// {
//     let fpara= document.getElementById("fpara");
//     fpara.textContent="Hello Bhavuk!!";
// }
// let fpara= document.getElementById("fpara");
// fpara.addEventListener("click",changeText);
// removing event listner
// fpara.removeEventListener("click",changeText)
// using event
// function changeText(event)
// {
//     console.log(event);
//     let fpara= document.getElementById("fpara");
//     fpara.textContent="Hello Bhavuk!!";
// }
// let fpara= document.getElementById("fpara");
// fpara.addEventListener("click",changeText);
// preventing default functions of an element
// let anchorElement=document.getElementById("fanchor");
// anchorElement.addEventListener("click",function(event)
// {
//     event.preventDefault(); // used to prevent default function of an element
//     anchorElement.textContent="click and done" // changing text of anchor tag
// });
// avoiding to many listners. here we have created 4 listeners instead of creating a single one.
// let paras= document.querySelectorAll("p");
// for(let i=0;i<paras.length;i++)
// {
//     let para=paras[i];
//     para.addEventListener("click",function()
//     {
//         alert("you have clicked on para:"+(i+1));
//     }
// )
// }
// using single listener
// let paras= document.querySelectorAll("p");
// function alertPara()
//     {
//         alert("you have clicked on para:"+ event.target.textContent); // herei+1 is not written bec it will be undefined as it is in function. we have used text content so text of para will be shown on alert window. target means element being clicked
//     }
// for(let i=0;i<paras.length;i++)
//     {
//         let para=paras[i];
//         para.addEventListener("click",alertPara);
//     }
// applying listener directly on div
// function alertPara()
//     {
//         alert("you have clicked on para:"+ event.target.textContent); 
//     }
// let mydiv=document.getElementById("wrapper");
// document.addEventListener("click",alertPara);
// if you want to apply property on only span tag use nodeNameproperty
function alertPara()
    {
        if(event.target.nodeName=="SPAN")
        {
            alert("you have clicked on para:"+ event.target.textContent); 
        }
    }
let mydiv=document.getElementById("wrapper");
document.addEventListener("click",alertPara);