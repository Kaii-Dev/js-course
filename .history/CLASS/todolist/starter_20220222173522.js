
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
            const todoItem = this.createElement('div', 'todo-item');
            const span = this.createElement('span', 'todo-text');
            span.textContent = todotext;
            const icon = this.createElement('i');
            icon.className = 'fas fa-trash todo-remove';
            icon.setAttribute('data-value', todotext);
            todoItem.append(span, icon);
            this.todoList.append(div);
         });
      }
   }

   viewAddTodo(handler){
      this.form.addEventListener('submit', e => {
         e.preventDefault();
         if(this._todoValue){
            handler(this._todoValue);
            this._resetValue;
         }
      });
   }

   viewRemoveTodo(handler){
      this.todoList.addEventListener('click', e => {
         if()
      });
   }


}

class Controller{
   constructor(model, view){
      this.model= model;
      this.view = view;
   }
}

const app = new Controller(new Model(), new View());