let mydiv= document.querySelector("#mydiv");
// let newElement= document.createElement("span");
// newElement.textContent="Bhavuk Mahajan";
// mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterbegin", newElement);
// mydiv.insertAdjacentElement("beforeend", newElement);
// mydiv.insertAdjacentElement("afterend", newElement);
// removing a child from parent
let parent= document.querySelector("#mydiv");
let child= document.querySelector("#fpara");
parent.removeChild(child);