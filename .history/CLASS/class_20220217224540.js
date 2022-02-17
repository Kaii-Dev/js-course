//ES6

function Person(name){
   this.name= name;
}

Person.prototype.getName = function(){
   console.log(Person.name);
}

const newPerson = new Person('John');