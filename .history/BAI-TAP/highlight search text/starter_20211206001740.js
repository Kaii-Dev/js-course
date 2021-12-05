window.addEventListener("load", function(){
   const input = document.querySelector(".input-search");
   const items = document.querySelectorAll(".dropdown-item");

   input.addEventListener("keypress", handleHighLight)
   let filter ="";
   function handleHighLight(e){
      filter = filter+ (e.key)
      filter = filter.toLocaleLowerCase();
      // console.log(filter);
      [...items].forEach(item => {
         const text = item.textContent.toLocaleLowerCase();
         const index = text.indexOf(filter);
         console.log(index);
         if(index >= 0 && text.startsWith(filter.charAt(0))){
            item.innerHTML = `${text.substring(0, index)} <span class="primary">${text.substring()}</span>`;
         }
      })
   }
});