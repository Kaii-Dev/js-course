window.addEventListener("load", function(){
   const tabItems = document.querySelectorAll(".tab-item");
   [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));

   const tabList = document.quer

   function handleTabClick(e){
      [...tabItems].forEach(item => item.classList.remove("active"))
      e.target.classList.add("active");
   }
});