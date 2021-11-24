window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-hover");

   imageCover.addEventListener("mousemove", handleImageHover)

   function handleImageHover(event){
      console.log(event.target);
   }
})