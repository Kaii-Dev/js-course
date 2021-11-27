window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-cover");
   //pageX, clientX, getBounding, offset
   const imageWrapper = document.querySelector('.image-wrapper');
   let imageWrapperWidth= imageWrapper.offsetWidth;

   imageCover.addEventListener("mousemove", handleImageHover)
   const image = document.querySelector('.image');
   function handleImageHover(e){
      const pX= e.pageX;
      const pY= e.pageY;
      image.style= "width: auto; height: auto; max-height : unset"
      let imageWidth = image.offsetWidth // độ cao của phần tử
      let imageHeight = image.offsetHeight // độ rộng của phần tử trừ đi border
      let x = e.pX;
      let y= e.pY;
      console.log(x);
      // console.log(imageHeight , imageWidth);

      image.style= `left: ${x}px; top:${0}px; width: auto; height: auto ; max-height : unset`;
   }
})