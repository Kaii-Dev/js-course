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
      let spaceX= (imageWidth/2 - imageWrapperWidth) *2;
      let spaceY= (imageHeight/2 - imageWrapperHeight) *2;
      imageWidth = spaceX + imageWidth;
      imageHeight = spaceY + imageHeight;
      let ratioX = imageWidth/ imageWrapperWidth /2;
      let ratioY = imageHeight/ imageWrapperHeight /2;
      let x = pX * ratioX;
      let y= pY * ratioY;
      console.log(x);
      // console.log(imageHeight , imageWidth);

      image.style= `left: ${-x}px ; top:${-y}px ; width: auto; height: auto ; max-height : unset; transfrom: none;`;
   }
})