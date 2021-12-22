{/* <div class="todo-item">
            <span class="todo-text">learning english</span>
            <i class="fa fa-trash todo-remove" ></i>
         </div> */}

         window.addEventListener("load", function(){
            //khai bao bien
            const form = document.querySelector("form");
            form.addEventListener("click", function(e){
               e.preventDefault();
               const todoVal = form.elements["todo"].value; // kien thuc trong bai form
                      //main code
               form.elements["todo"].value = "";
            })
         })