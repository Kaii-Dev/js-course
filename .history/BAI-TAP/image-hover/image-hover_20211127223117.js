window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-cover");

   imageCover.addEventListener("mousemove", handleImageHover)
   const imageHover = document.querySelector('.image-wrapper');
   const image = document.querySelector('.image');
   function handleImageHover(e){
      const pX= e.pageX;
      const pY= e.pageY;
      image.style= "width: auto; height: auto; max-height : unset"
      let imageWi
   }
})