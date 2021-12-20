window.addEventListener("load", function(){
   const tabItems = document.querySelectorAll(".tab-item");
   [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));

   function handleTabClick(e){
      [...tabItems].forEach(item => item.classList.remove("active"))
      e.target.classList.add("active");
   }
});