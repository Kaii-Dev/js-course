document.addEventListener("DOMContentLoaded", function(){
   const images= document.querySelector(".container img");
   window.addEventListener("scroll", function(){
      const windowScrollTop = window.pageYOffset;

      [...images].forEach((item) => {
         const itemOffsetTop = item.offsetTop;
         console.log(itemOffsetTopm);
      })
   });
})