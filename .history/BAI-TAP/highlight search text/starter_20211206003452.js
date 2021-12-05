window.addEventListener("load", function(){
   const input = document.querySelector(".input-search");
   const items = document.querySelectorAll(".dropdown-item");

   input.addEventListener("keydown", handleHighLight)
   let filter ="";
   function handleHighLight(e){
      filter = e.target.value
      filter = filter.toLocaleLowerCase();
      // console.log(filter);
      [...items].forEach(item => {

         const text = item.textContent.toLocaleLowerCase();
         const index = text.indexOf(filter);
       
         if(index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))){
            item.innerHTML = `${text.substring(0, index)}<span class="primary">${text.substring(index, index +filter.length)}</span>${text.substring(index+filter.length)}`;   
         }
      })
   }
});