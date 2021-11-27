window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-cover");
   imageCover.addEventListener("mousemove", handleImageHover)
   //pageX, clientX, getBounding, offset
   const imageWrapper = document.querySelector('.image-wrapper');
   let imageWrapperWidth= imageWrapper.offsetWidth;
   let imageWrapperHeight= imageWrapper.offsetHeight;

   const image = document.querySelector('.image');
   function handleImageHover(e){
      const pX= e.pageX;
      const pY= e.pageY;
      image.style= "width: auto; height: auto; max-height : unset"
      let imageWidth = image.offsetWidth // độ cao của phần tử
      let imageHeight = image.offsetHeight // độ rộng của phần tử trừ đi border
      let radiõ
      let x = pX;
      let y= pY;
      console.log(x);
      // console.log(imageHeight , imageWidth);

      image.style= `left: ${-x}px; top:${0}px; width: auto; height: auto ; max-height : unset; transfrom: none`;
   }
})