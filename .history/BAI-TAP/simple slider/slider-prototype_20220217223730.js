window.addEventListener("load", function () {

   function slider(){

    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.this.nextBtn = document.querySelector(".slider-next");
    this.prevBtn = document.querySelector(".slider-prev");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.sliderItemWidth = sliderItems[0].offsetWidth;
    this.slidesLength = sliderItems.length;
   this.postionX = 0;
   this.index = 0;
   nextBtn.addEventListener("click", function () {
     handleChangeSlide(1);
   });
   prevBtn.addEventListener("click", function () {
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
   
};
});

slider.prototype.handleChangeSlide = function (direction) {}