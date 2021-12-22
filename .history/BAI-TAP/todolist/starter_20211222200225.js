

         window.addEventListener("load", function(){
            //khai bao bien
            function createTodoItem(){
                const template = ``
            }
            const form = document.querySelector("form");
            form.addEventListener("click", function(e){
               e.preventDefault();
               const todoVal = form.elements["todo"].value; // kien thuc trong bai form
               //main code
               form.elements["todo"].value = "";
            })
         })