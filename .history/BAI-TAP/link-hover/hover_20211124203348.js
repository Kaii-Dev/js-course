window.addEventListener("load", function(){
   const links = [...document.querySelectorAll(".menu-links")];
   links.forEach(item => item.addEventListener("mouseenter", handleOverLink));

   function handleOverLink(event){
      console.log(event.target);
   }

})