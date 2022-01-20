window.addEventListener("load", function(){
   const slider = document.querySelector(".slider");
   const sliderMain = document.querySelector(".slider-main");
   const sliderItems = document.querySelectorAll(".slider-item");
   const nextBtn = document.querySelector(".slider-next");
   const prevBtn = document.querySelector(".slider-prev");
   const dotItem = document.querySelectorAll(".slider-dot-item")
   const sliderItemWidth = sliderItems[0].offsetWidth;
   const sliderLength = sliderItems.length;
   sliderMain.style.width = `${sliderLength * sliderItemWidth}px`;
   
   function handleChangeSlide(direction){
      if(direction === 1){
         console.log('next slider');
      }else if(direction=== -1){
         console.log('pre slider');
      }
   }

   nextBtn.addEventListener("click", function(){
      handleChangeSlide(1);
   })

   prevBtn.addEventListener("click", function(){
      handleChangeSlide(-1);
   })
})