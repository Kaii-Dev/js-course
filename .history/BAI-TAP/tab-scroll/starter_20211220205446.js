window.addEventListener("load", function(){
   const tabItems = document.querySelectorAll(".tab-item");
   [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));

   const tabList = document.querySelector(".tab-list");
   const tab= document.

   function handleTabClick(e){
      [...tabItems].forEach(item => item.classList.remove("active"))
      e.target.classList.add("active");

      const leftSpacing = e.target.client;
      console.log(leftSpacing);
   }
});