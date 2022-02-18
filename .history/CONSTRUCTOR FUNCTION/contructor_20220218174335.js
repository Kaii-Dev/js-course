//declaration , new, this, method, caution
//constructor : là bản thiết kế cho 1 khuôn mẫu

//ví dụ
function Course(name, price){
   this.name= name;
   this.price= price;
}
const phpCourse = new Course('php', 1000)
const jsCourse = new Course('js', 1030)
console.log(object);

let studens = {
   name : "khai",
   age : 20,
   school: 'chau van liem'
};

//constructor function : thường viết đầu bằng chữ hoa và sử dụng từ new để tạo

function Students(name, age, school){
   //this = {}
   // add properties to this
   this.name= name;
   this.age = age;
   this.school = school;
   this.getName = function(){
      return `your name is ${this.name}`;
   }
   //return this
}

let student2 = new Students('an', 19, 'chau van liem');
console.log(student2.getName()); 

//prototype : thuộc tính - có tính chất kế thừa
let str = 'abc';
str.toUpperCase();
String.prototype.duplicate = function(){
   return this + this;
}
console.log(str.duplicate());

// ví dụ về constructor function và prototype

   //định nghĩa về constructor function cần tạo
function girl(){
   
   this.cook= function(){
      console.log('your girl can cook'); 
   }
}
girl.prototype.sing = function(){
   console.log('your girl can sing');
}
let an = new girl(); // xác định biến an là thuộc về constructor function

//biến an lúc này có tính chất kế thừa nên có thể sử dụng cook và sing
an.cook();
an.sing();