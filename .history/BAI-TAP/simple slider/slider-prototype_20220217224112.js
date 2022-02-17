window.addEventListener("load", function () {

   function slider(){

    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.nextBtn = document.querySelector(".slider-next");
    this.prevBtn = document.querySelector(".slider-prev");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.sliderItemWidth = this.sliderItems[0].offsetWidth;
    this.slidesLength = this.sliderItems.length;
    this.postionX = 0;
    index = 0;
   this.nextBtn.addEventListener("click", function () {
     handleChangeSlide(1);
   });
   this.prevBtn.addEventListener("click", function () {
     handleChangeSlide(-1);
   });
   [...this.dotItems].forEach((item) =>
     item.addEventListener("click", );
  
   }
});

slider.prototype.handleChangeSlide= function(direction){
  
      if (direction === 1) {
        if (index >= this.slidesLength - 1) {
          index = this.slidesLength - 1;
          return;
        }
        this.postionX = this.postionX - this.sliderItemWidth;
        this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
        index++;
      } else if (direction === -1) {
        if (index <= 0) {
          index = 0;
          return;
        }
        this.postionX = this.postionX + this.sliderItemWidth;
        this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
        index--;
      }
      [...this.dotItems].forEach((el) => el.classList.remove("active"));
      this.dotItems[index].classList.add("active");
    
}