window.addEventListener("load", function(){
   const tabItems = document.querySelectorAll(".tab-item");
   [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));

   const tabList = document.querySelector(".tab-list");
   const tab= document.querySelector(".tab");
   const tabOffset = tab.offsetLeft

   function handleTabClick(e){
      [...tabItems].forEach(item => item.classList.remove("active"))
      e.target.classList.add("active");

      let leftSpacing = e.target.offsetLeft - tabOffset;
      // console.log(leftSpacing);
      tabList.scroll(leftSpacing / 1.5 - e.target.offsetWidth, 0);
   }
});