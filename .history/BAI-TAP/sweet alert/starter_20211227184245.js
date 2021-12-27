window.addEventListener("load", function(){
   function render(){
      const template = `<div class="sweet-alert">
      <i class="fa fa-check" aria-hidden="true"></i>
      <p class="sweet-text">chuc mung ban da hoc xong khoa javascript</p>
   </div>`;
   document.body.insertAdjacentHTML("beforeend", template); 
   }
   const button = document.querySelector(".button");
   button.addEventListener("click")
});