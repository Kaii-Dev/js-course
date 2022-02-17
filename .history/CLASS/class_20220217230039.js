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

   get name(){
      return this._name;
   }
   set name(newName){
      return this._name = newName;
   }
}
const khai = new Person2('khai');
console.log(khai.name); // khi truy xuất giá trị thì sẽ tìm trong cái class name và trỏ tới
khai.name= 'khai2'; // khi truyền vào giá trị thì nó sẽ hiểu đây là thiết lập trỏ tới setter
console.log(khai.name);