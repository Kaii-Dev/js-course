//ES6
function Person(name){
   this.name= name;
}

Person.prototype.getName = function(){
   console.log(this.name);
}
const newPerson = new Person('John');
newPerson.getName();