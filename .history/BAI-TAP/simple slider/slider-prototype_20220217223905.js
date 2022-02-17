window.addEventListener("load", function () {

   function slider(){

   const this.sliderMain = document.querySelector(".slider-main");
   const this.sliderItems = document.querySelectorAll(".slider-item");
   const this.nextBtn = document.querySelector(".slider-next");
   const this.prevBtn = document.querySelector(".slider-prev");
   const this.dotItems = document.querySelectorAll(".slider-dot-item");
   const this.sliderItemWidth = this.sliderItems[0].offsetWidth;
   const this.slidesLength = this.sliderItems.length;
   let this.postionX = 0;
   let this.index = 0;
   this.nextBtn.addEventListener("click", function () {
     handleChangeSlide(1);
   });
   this.prevBtn.addEventListener("click", function () {
     handleChangeSlide(-1);
   });
   [...this.dotItems].forEach((item) =>
     item.addEventListener("click", function (e) {
       [...this.dotItems].forEach((el) => el.classList.remove("active"));
       e.target.classList.add("active");
       const slideIndex = parseInt(e.target.dataset.index);
       this.index = slideIndex;
       this.postionX = -1 * this.index * this.sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
     })
   );
   function handleChangeSlide(direction) {
     if (direction === 1) {
       if (this.index >= this.slidesLength - 1) {
         this.index = this.slidesLength - 1;
         return;
       }
       this.postionX = this.postionX - this.sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
       this.index++;
     } else if (direction === -1) {
       if (this.index <= 0) {
         this.index = 0;
         return;
       }
       this.postionX = this.postionX + this.sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
       this.index--;
     }
     [...this.dotItems].forEach((el) => el.classList.remove("active"));
     this.dotItems[this.index].classList.add("active");
   }
};
});