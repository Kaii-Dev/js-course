

         window.addEventListener("load", function(){
            //khai bao bien
            function createTodoItem(title){
                const template = ` <div class="todo-item">
                <span class="todo-text">${title}</span>
                <i class="fa fa-trash todo-remove" ></i>
             </div>`;
            }
            const todoList = document.querySelector(".todo-list")
            const form = document.querySelector("form");
            form.addEventListener("click", function(e){
               e.preventDefault();
               const todoVal = form.elements["todo"].value; // kien thuc trong bai form

               //main code
               form.elements["todo"].value = "";
            })
         })