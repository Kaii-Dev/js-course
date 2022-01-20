window.addEventListener("load", function(){
   const slider = document.querySelector(".slider");
   const sliderMain = document.querySelector(".slider-main");
   const sliderItems = document.querySelectorAll(".slider-item");
   const nextBtn = document.querySelector(".slider-next");
   const prevBtn = document.querySelector(".slider-prev");
   const dotItem = document.querySelectorAll(".slider-dot-item")
   const sliderItemWidth = sliderItems[0].offsetWidth;
   const sliderLegth = sliderItems.length;
   sliderMain.style.width = `${slider}`
   console.log(sliderItemWidth);
})