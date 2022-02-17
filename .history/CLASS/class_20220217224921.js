//ES6
   //constructor/prototype
function Person(name){
   this.name= name;
}
Person.prototype.getName = function(){
   console.log(this.name);
}
const John = new Person('John');
John.getName();

   //class
class Person2{
   constructor(name){
      this.name= name;
   }
   getName(){
      console.log(this.name);
   }
}
const khai = new Person2()