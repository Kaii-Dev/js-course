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

   //class : trong class có định nghĩa constructor, setter, getter
class Person2{
   constructor(name){
      this.name= name;
   }
   // getName(){
   //    return this.name;
   // }
   // setName(newName){
   //    this.name= newName;
   // }

   set name(){
      return this._name;
   }
   get name(){
      return this._name = newName;
   }
}
const khai = new Person2('khai');
console.log(khai.getName());
khai.setName('khaideptrai');
console.log(khai.getName());