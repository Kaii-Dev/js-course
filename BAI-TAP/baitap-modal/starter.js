const button= document.querySelector(".button");

const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;

button.addEventListener("click", function () {
   document.body.insertAdjacentHTML("beforeend", template);
 });
document.body.addEventListener("click", function (event){
  console.log(event.target);
  if(event.target.matches(".modal-close")){
    const modal= event.target.parentNode.parentNode; //lúc này event.target đang là class modal-close- truy vấn 2 lần parentNode thì nó sẽ là div có class modal
    
    modal.parentNode.removeChild(modal);// từ đây truy vấn về body để xóa chính nó
  }
  else if (event.target.matches(".modal")){
    event.target.parentNode.removeChild(event.target);
  }
})


