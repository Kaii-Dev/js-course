window.addEventListener("load", function(){
   const links = [...document.querySelectorAll(".menu-link")];

   links.forEach(item => item.addEventListener("mouseenter", handleOverLink));

   const line = document.createElement("div");
   line.className = "line-effect";
   document.body.appendChild(line);

   function handleOverLink(event){
      console.log(event.target);
   }

})