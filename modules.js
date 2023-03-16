// Module 1 controlers
const overlay = document.querySelector(".overlay");
const module1 = document.querySelector(".module-1");
const closeModule1 = document.querySelector(".close-module-1");
const openModule1 = document.querySelector(".show-module-1");

//module-1 btns Functions:

const openModuleFunc1 = function () {
  overlay.classList.remove("hidden");
  module1.classList.remove("hidden");
  module1.style.marginTop = "0rem";
};

const closeModuleFunc1 = function () {
  overlay.classList.add("hidden");
  module1.classList.add("hidden");
  module1.style.marginTop = "-300rem";
};

//module-1 Events
openModule1.addEventListener("click", openModuleFunc1);
closeModule1.addEventListener("click", closeModuleFunc1);
overlay.addEventListener("click", closeModuleFunc1);
