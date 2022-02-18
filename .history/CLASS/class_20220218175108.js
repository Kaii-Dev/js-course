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


   //CLASS : trong class có định nghĩa constructor(khởi tạo), setter, getter, static
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
   class Article{
      constructor(title, date){
         this.title= title;
         this.date = date;
      }
      static compare(a, b){
         return a.date - b.date; // khúc này để sort theo thứ tự ngày
      }
   }

   const articles = [
      new Article('css', new Date(2022, 0, 1)), // với 0 là tháng 1
      new Article('css', new Date(2022, 1, 1)),
      new Article('css', new Date(2022, 11, 1)),
   ]
   articles.sort(Article.compare);
   console.log(articles[0].title); //in ra giá trị 0 của mảng sau khi sort

   //STATIC PROPERTY
   class Item{
      constructor(name){
         this.name= name;
         this.constructor.count++;
      }
      static count = 0;
      static getCount(){
         return Item.count;
      }
   }

   const pen = new Item('pencil'); // mỗi khi khởi tạo 1 đối tượng với từ khóa new thì nó sẽ gọi vào this.constructor.count => count tăng lên 1
   const car = new Item('bmw');
   console.log(Item.getCount());

   //SUPER + EXTENDS
   class animal{
      constructor(legs){
         this.legs= legs;
      }
      walking(){
         console.log(`walking on ${this.legs} legs`);
      }
   }

   class dog extends animal{
      //dùng super để kế thừa constructor của class animal
      constructor(legs, name){
         super(legs);
      }
      fly(){
         super.walking();
         console.log(`my name is ${this.name}`);
      }
   }

