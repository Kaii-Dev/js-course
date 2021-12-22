

         window.addEventListener("load", function(){
            //khai bao bien
            const todoList = document.querySelector(".todo-list")
            const form = document.querySelector("form");

            function createTodoItem(title){
                const template = ` <div class="todo-item">
                <span class="todo-text">${title}</span>
                <i class="fa fa-trash todo-remove" ></i>
             </div>`;
             todoList.insertAdjacentHTML
            }
            form.addEventListener("click", function(e){
               e.preventDefault();
               const todoVal = form.elements["todo"].value; // kien thuc trong bai form

               //main code
               form.elements["todo"].value = "";
            })
         })