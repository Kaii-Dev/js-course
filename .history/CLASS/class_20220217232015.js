   // từ khóa new sẽ tạo ra empty object và nó sẽ gán các đối tượng trong constructor vào đó
   //constructor/prototype
function Person(name){
   this.name= name;
}
Person.prototype.getName = function(){
   console.log(this.name);
}
const John = new Person('John');
John.getName();


   //CLASS : trong class có định nghĩa constructor, setter, getter, static
class Person2{
   constructor(name){
      this.name= name;
   }
   get name(){
      return this._name;
   }
   set name(newName){
      return this._name = newName;
   }
}
const khai = new Person2('khai');
console.log(khai.name); // khi truy xuất giá trị thì sẽ tìm trong cái class Person2 và trỏ tới getter và lấy giá trị name của getter
khai.name= 'khai2'; // khi truyền vào giá trị thì nó sẽ hiểu đây là thiết lập trỏ tới setter
console.log(khai.name);


   //CLASS EXPRESSION
   let student= class{
      constructor (name){
         this.name = name;
      }
      get name(){
         return this._name;
      }
      set name(newName){
         this._name = newName;
      }
   }
   const an = new student('an');
   console.log(an.name);

   //STATIC METHOD: không bị phụ thuộc bất kì obj nào mà khi sử dụng từ khóa new, mà nó sẽ gọi trực tiếp từ class !. 
   class Article{}