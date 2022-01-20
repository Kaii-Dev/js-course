window.addEventListener("load", function(){
   const slider = document.querySelector(".slider");
   const sliderMain = document.querySelector(".slider-main");
   const sliderItems = document.querySelectorAll(".slider-item");
   const nextBtn = document.querySelector(".slider-next");
   const prevBtn = document.querySelector(".slider-prev");
   const dotItem = document.querySelectorAll(".slider-dot-item")
   const sliderItemWidth = sliderItems[0].offsetWidth;
   const sliderLength = sliderItems.length;
   let positionX = 0;
   let index = 0;
   sliderMain.style.width = `${sliderLength * sliderItemWidth}px`;

   function handleChangeSlide(direction){
      if(direction === 1){
         index++;
         if(index >= sliderLength) return;
         positionX = positionX - sliderItemWidth;
         sliderMain.style = `transform: translateX(${positionX}px)`;
         
      }else if(direction === -1){
         index--;
         if(index <=0) {
            
         }return;
         positionX = positionX +sliderItemWidth;
         sliderMain.style = `transform: translateX(${positionX}px)`;

      }
   }
   
   nextBtn.addEventListener("click", function(){
      handleChangeSlide(1);
   })

   prevBtn.addEventListener("click", function(){
      handleChangeSlide(-1);
   })
})