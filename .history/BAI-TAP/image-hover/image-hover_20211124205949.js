window.addEventListener("load", function(){
   const imageCover = document.querySelector(".image-cover");

   imageCover.addEventListener("mousemove", handleImageHover)

   function handleImageHover(event){
      console.log(event.target);
   }
})