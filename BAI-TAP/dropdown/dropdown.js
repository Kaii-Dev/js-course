const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems= document.querySelectorAll(".dropdown__item");
const dropdownSelected=document.querySelector(".dropdown__selected");
const dropdownList=document.querySelector(".dropdown__list");
const dropdown= document.querySelector(".dropdown");
const dropdownCarret = document.querySelector(".dropdown__caret");


dropdownSelect.addEventListener("click", function(event){
      dropdownList.classList.toggle("show");
      dropdownCarret.classList.toggle("fa-caret-up");
})

dropdownItems.forEach(item=> item.addEventListener("click", function(event){
   const text= event.target.querySelector(".dropdown__text").textContent;
   dropdownSelected.textContent= text;
   dropdownList.classList.toggle("show"); // giúp cho khi bấm vào 1 item thì tự động nó đóng cái dropdown 
   
}));

document.addEventListener("click", function(e){
   console.log(e.target);
   if(!dropdown.contains(e.target)){
      dropdownList.classList.remove("show");
   }
})
