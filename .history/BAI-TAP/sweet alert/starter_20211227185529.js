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
      render();
      const sweetItem = document.querySelector(".sweet-alert");
      console.log(sweetItem);
      if(sweetItem){
         sweetItem.parentElement.removeChild(sweetItem);
      }
   });

});

// window.addEventListener("load", function () {
//    function renderSweetAlert() {
//      const template = ` <div class="sweet-alert">
//      <i class="fa fa-check sweet-icon"></i>
//      <p class="sweet-text">Congratulations on learning JS</p>
//      </div>`;
//      document.body.insertAdjacentHTML("beforeend", template);
//    }
   // const button = document.querySelector(".button");
   // button.addEventListener("click", function () {
   //   renderSweetAlert();
   //   const sweetItem = document.querySelector(".sweet-alert");
   //   if (sweetItem) {
   //     setTimeout(function () {
   //       sweetItem.parentElement.removeChild(sweetItem);
   //     }, 2000);
   //   }
   // });
//  });