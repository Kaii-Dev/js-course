document.addEventListener("DOMContentLoaded", function(){
   const images= document.querySelector(".container img");
   console.log(images);
   window.addEventListener("scroll", function(){
      const windowScrollTop = window.pageYOffset;

      [...images].forEach((item) => {
         const itemOffsetTop = item.offsetTop;
         console.log(itemOffsetTop);
      })
   });
})