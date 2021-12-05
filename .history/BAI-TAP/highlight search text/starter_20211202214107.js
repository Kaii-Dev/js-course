window.addEventListener("load", function(){
   const input = document.querySelector(".input-search");
   input.addEventListener("keypress", handleHighLight)
   let filter ="";
   function handleHighLight(e){
      // console.log(e.key);
      filter = filter+ e.key
   }
});