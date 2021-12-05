window.addEventListener("load", function(){
   const input = document.querySelector(".input-search");
   const item = document.querySelector(".dropdown-item")
   input.addEventListener("keypress", handleHighLight)
   let filter ="";
   function handleHighLight(e){
      filter = filter+ (e.key)
      filter = filter.toLocaleLowerCase();
      console.log(filter);
   }
});