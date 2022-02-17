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
     item.addEventListener("click", function (e) {
       [...this.dotItems].forEach((el) => el.classList.remove("active"));
       e.target.classList.add("active");
       const slideIndex = parseInt(e.target.dataset.index);
       index = slideIndex;
       this.postionX = -1 * index * this.sliderItemWidth;
       this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
     })
   );
  
};
});

slider.prototype.handleChangeSlide