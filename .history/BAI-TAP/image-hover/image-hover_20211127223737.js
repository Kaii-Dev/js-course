window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-cover");

   imageCover.addEventListener("mousemove", handleImageHover)
   const imageHover = document.querySelector('.image-wrapper');
   const image = document.querySelector('.image');
   function handleImageHover(e){
      const pX= e.pageX;
      const pY= e.pageY;
      image.style= "width: auto; height: auto; max-height : unset"
      let imageWidth = image.offsetWidth // độ cao của phần tử
      let imageHeight = image.offsetHeight // độ rộng của phần tử trừ đi border

      let imageWraperWitdh = imageWraperWitdh.offsetWidth
      let imageWraperHeight = imageWraperHeight.offsetHeight
      // console.log(imageHeight , imageWidth);

      image.style= `${0}`
   }
})