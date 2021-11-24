const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu")

toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event){
   event.target.classList.toggle("fa-times");
   event.target.classList.toggle("fa-bars");
   menu.classList.toggle("is-show");
}
//bai tap toggle 2
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event){
   console.log(event.target);
   if(!menu.contains(event.target) && !event.target.matches(".menu-toggle")){ //nếu menu không có chứa cái target mà mình nhấn vào, và cái target mình nhấn vào không phải là menu toogle thì remove class is show
      menu.classList.remove("is-show");
      toggle.classList.remove("fa-times");
      toggle.classList.add("fa-bars");

   }
}

