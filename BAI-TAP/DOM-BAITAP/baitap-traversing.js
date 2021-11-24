//active modal

//cách 1 (có sẵn html)+ 2(tạo template để add vào)
const template = ` <div class="modal">
<div class="modal-content">
   <i class="fa fa-times modal-close"></i>
   <div class="modal-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro numquam saepe unde voluptate. Nobis quibusdam ratione minima magni incidunt nesciunt vitae laboriosam molestias, dolore sequi, tempore sapiente consectetur? Maiores, veritatis.</div>
   <div class="modal-action">
      <button class="modal-submit">Confirm</button>
      <button class="modal-cancel">Cancel</button>
   </div>
</div>
</div>`;

const body= document.body

body.insertAdjacentHTML("afterbegin",template);

const modal = document.querySelector(".modal")
if(modal){
   setTimeout(function(time){
      modal.classList.add("is-show");
   },3000);
}

      //cách 3

// const modal = document.createElement("div")
// modal.classList.add("modal");
// const modalContent = document.createElement("div")
// modalContent.classList.add("modal-Content");
// modal.appendChild(modalContent);
// document.body.appendChild(modal)

// const modalClose = document.createElement("i")
// modalClose.className="fa fa-times modal-close"; //nhièu class thì add bằng className
// modalContent.appendChild(modalClose);

// const modalDesc= document.createElement("div")
// modalDesc.classList.add("modal-desc");
// modalContent.appendChild(modalDesc);

// modalDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro numquam saepe unde voluptate. Nobis quibusdam ratione minima magni incidunt nesciunt vitae laboriosam molestias, dolore sequi, tempore sapiente consectetur? Maiores, veritatis`;

// const modalAction = document.createElement("div")
// modalAction.classList.add("modal-action")
// modalContent.appendChild(modalAction)

// const confirmBtn = document.createElement("button")
// confirmBtn.classList.add("modal-submit")
// confirmBtn.textContent = "Confirm"
// modalAction.appendChild(confirmBtn);

// const cancelBtn = document.createElement("button")
// cancelBtn.classList.add("modal-cancel")
// cancelBtn.textContent = "Cancel"
// modalAction.appendChild(cancelBtn);





