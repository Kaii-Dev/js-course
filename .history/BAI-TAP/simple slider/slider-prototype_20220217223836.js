window.addEventListener("load", function () {

   function slider(){

   const this.sliderMain = document.querySelector(".slider-main");
   const this.sliderItems = document.querySelectorAll(".slider-item");
   const this.nextBtn = document.querySelector(".slider-next");
   const this.prevBtn = document.querySelector(".slider-prev");
   const dotItems = document.querySelectorAll(".slider-dot-item");
   const sliderItemWidth = this.sliderItems[0].offsetWidth;
   const slidesLength = this.sliderItems.length;
   let postionX = 0;
   let index = 0;
   this.nextBtn.addEventListener("click", function () {
     handleChangeSlide(1);
   });
   this.prevBtn.addEventListener("click", function () {
     handleChangeSlide(-1);
   });
   [...dotItems].forEach((item) =>
     item.addEventListener("click", function (e) {
       [...dotItems].forEach((el) => el.classList.remove("active"));
       e.target.classList.add("active");
       const slideIndex = parseInt(e.target.dataset.index);
       index = slideIndex;
       postionX = -1 * index * sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${postionX}px)`;
     })
   );
   function handleChangeSlide(direction) {
     if (direction === 1) {
       if (index >= slidesLength - 1) {
         index = slidesLength - 1;
         return;
       }
       postionX = postionX - sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${postionX}px)`;
       index++;
     } else if (direction === -1) {
       if (index <= 0) {
         index = 0;
         return;
       }
       postionX = postionX + sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${postionX}px)`;
       index--;
     }
     [...dotItems].forEach((el) => el.classList.remove("active"));
     dotItems[index].classList.add("active");
   }
};
});