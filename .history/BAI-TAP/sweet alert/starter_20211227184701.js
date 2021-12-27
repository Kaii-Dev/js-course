window.addEventListener("load", function(){
   function render(){
      const template = `<div class="sweet-alert">
      <i class="fa fa-check sweet-icon"></i>
      <p class="sweet-text">chuc mung ban da hoc xong khoa javascript</p>
   </div>`;
   document.body.insertAdjacentHTML("beforeend", template); 
   }
   const button = document.querySelector(".button");
   button.addEventListener("click", function(){
      render()
      const sweetItem = document.querySelector(".sweet-alert");
      if(sweetItem){
         sweetItem.parentNode.removeChild(sweetItem);
      }
   });

});

console.log(object);