window.addEventListener("load", function(){
   const slider = document.querySelector(".slider");
   const sliderMain = document.querySelector(".slider-main");
   const sliderItems = document.querySelectorAll(".slider-item");
   const nextBtn = document.querySelector(".slider-next");
   const prevBtn = document.querySelector(".slider-prev");
   const dotItems = document.querySelectorAll(".slider-dot-item")
   const sliderItemWidth = sliderItems[0].offsetWidth;
   const sliderLength = sliderItems.length;
   let positionX = 0;
   let index = 0;
   sliderMain.style.width = `${sliderLength * sliderItemWidth}px`;

   function handleChangeSlide(direction){
      if(direction === 1){
         if(index >= sliderLength -1) {
            index = sliderLength - 1; // check điều kiện 
            return;
         }
         positionX = positionX - sliderItemWidth;
         sliderMain.style = `transform: translateX(${positionX}px)`;
         index++;
         
      }else if(direction === -1){
         if(index <= 0) {
            index = 0; // check điều kiện
            return;
         };
         positionX = positionX + sliderItemWidth;
         sliderMain.style = `transform: translateX(${positionX}px)`;
         index--;
      }
   }
   
   nextBtn.addEventListener("click", function(){
      handleChangeSlide(1);
   });

   prevBtn.addEventListener("click", function(){
      handleChangeSlide(-1);
   });
   [...dotItems].forEach(item => item.addEventListener("click", function(e){
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      sliderMain.style = `transform: translateX(${-1 * index * slider }px)`;
      
   }))
})

