window.addEventListener("load", function(){
   const links = [...document.querySelectorAll(".menu-link")];

   links.forEach(item => item.addEventListener("mouseenter", handleOverLink));

   const line = document.createElement("div");
   line.className = "line-effect";
   document.body.appendChild(line);

   function handleOverLink(event){
      const {left, top, width, height} = event.target.getBoundingClientRect();

      const offsetBottom = 5;
      line.style.width = `${width}px`;
      line.style.left = `${left}px`;
      line.style.top = `${top + height + offsetBottom}px`; //cộng với height thì nó sẽ lớn hơn => cái line nó sẽ nằm ở dưới, + cái offsetbot để nó cách thêm 1 khoảng cho đẹp 
      
   }

})