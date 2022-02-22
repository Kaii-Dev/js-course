         // window.addEventListener("load", function(){
         //    //khai bao bien
         //    const todoList = document.querySelector(".todo-list")
         //    const form = document.querySelector("form");
         //    let todos = localStorage.length>0 ?JSON.parse(localStorage.getItem("todoList")): [];
         //    if(Array.isArray(todos) && todos.length>0){
         //       [...todos].forEach(item => createTodoItem(item))
         //    }

         //    function createTodoItem(title){ // hàm này là declaration nên sẽ bị hoisting lên trên và thế là dòng forEach số 8 xài được
         //        const template = ` <div class="todo-item">
         //        <span class="todo-text">${title}</span>
         //        <i class="fa fa-trash todo-remove" ></i>
         //     </div>`;
         //     todoList.insertAdjacentHTML("beforeend", template)
         //    }

         //    form.addEventListener("submit", function(e){
         //       e.preventDefault();
         //       const todoVal = form.elements["todo"].value; // kien thuc trong bai form
         //          //main code
         //       createTodoItem(todoVal);
         //       todos.push(todoVal);
         //       localStorage.length >0 && localStorage.setItem("todoList", JSON.stringify(todos));
         //          //save to localstorage
         //       form.elements["todo"].value = "";
         //    })

         //    //handle remove todo
         //    todoList.addEventListener("click", function(e){
         //       if(e.target.matches(".todo-remove")){
         //          //xoa trong dom
         //          const toRemove = e.target.parentNode;
         //          toRemove.parentNode.removeChild(toRemove);
         //          //xoa trong localstrorage
         //          const todoText = e.target.previousElementSibling.textContent;
         //          const newTodos = todos.filter(item => item !== todoText );
         //          localStorage.setItem("todoList", JSON.stringify(newTodos));
         //       }
         //    })
         // })
//mvc 
class Model{
   constructor(){

   }
}

class View{
   constructor(){
      this.app = this.getElement("body");
      this.todoWrapper = this.createElement("div", "todo");

      this.form = this.createElement("form" , 'todo-form');
      this.form.autocomplete = 'off';

      this.input = this.createElement("input", "todo-input");
      this.input.type = 'text';
      this.input.placeholder = 'enter your task';
      this.input.name = 'todo';

      this.button = this.createElement('button', 'todo-submit');
      this.button.type = 'submit';
      this.button.textContent = 'Add';
       
      this.form.append(this.input, this.button);

      this.todoList = this.createElement("div", "todo-list");

      this.todoWrapper.append(this.form, this.todoList);
      this.app.append(this.todoWrapper);
   }
   createElement(tag, className){
      const elm = document.createElement(tag);
      if(className) elm.classList.add(className);
      return elm;
   }
   getElement(selector){
      const elm = document.querySelector(selector);
      return elm;
   }

   get _todoValue(){
      return this.input.value;
   }

   _resetValue(){
      this.input.value = '';
   }

   displayTodos(todos){
      if(todos.lenght > 0){
         todos.forEach(todotext => { // arrow fn kco div
            const div = this.createElement('div', 'todo-item');
            const span = this.createElement('span', 'todo-text');
            span.textContent = todotext;
            const icon = this.createElement('i');
            icon.className = 'fas fa-trash todo-remove';
         });
      }
   }

}

class Controller{
   constructor(model, view){
      this.model= model;
      this.view = view;
   }
}

const app = new Controller(new Model(), new View());