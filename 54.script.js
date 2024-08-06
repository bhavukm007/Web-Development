// run on console. css get property
// let paraElement= document.getElementById("spara");
// console.log(paraElement.style); // will print the style applied on tag.run on console
// paraElement.style.backgroundColor="blue";
// run on console. css set property
// let secondElement= document.getElementById("sdiv");
// secondElement and hit enter
// secondElement.style.cssText; // will give the style on given tag
// secondElement.style.cssText="backgroundColor: black; color: white; padding:0.5rem";
// setAttribute is used to set value of class or id for an element
// let firstElement=document.querySelector("#fdiv");
// firstElement and hit enter
// firstElement.setAttribute("class","divclass");
// firstElement and hit enter
// firstElement.setAttribute("style","padding:0.4rem"); // it will result in complete removbal of earlier style provided that is bcg=aqua and padding=1rem and new style will be set with only padding=0.4rem
// use of className attribute
// let fpara=document.querySelector("#fpara");
// fpara and hit enter
// fpara.className // it is get function will print the class name already provided to fpara id
// fpara.className="one two"; // it is used to set class name
// fpara.className and hit enter. it will print the new class name
// classList is used to get class, array or list, add class, remove class, toggle(if present then remove and if not present then add) class and contain to check if particular element is present in class or not
// let fpara=document.querySelector("#fpara");
// fpara.classList and hit enter // will display classes in given element
// fpara.classList.add("thirdclass"); // will add class
// fpara.classList and hit enter
// fpara.classList.remove("firstclass"); // will remove class
// fpara.classList and hit enter
// fpara.classList.toggle("secondclass"); // since secondclass is present it will remove it
// fpara.classList and hit enter
// fpara.classList.toggle("secondclass"); // since secondclass is absent it will add it
// fpara.classList and hit enter
// fpara.classList.contains("firstclass"); // checks if class is present or not and returns true/false