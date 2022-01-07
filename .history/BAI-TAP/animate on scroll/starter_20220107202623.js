document.addEventListener("DOMContentLoaded", function(){
   const images= document.querySelectorAll(".container img");

   window.addEventListener("scroll", function(){
      const windowScrollTop = window.pageYOffset;
      [...images].forEach((item) => {
         const itemOffsetTop = item.offsetTop;
         if(windowScrollTop > itemOffsetTop){
            item.classList.add(".active")
         }
      })
   });
})