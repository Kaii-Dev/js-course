//declaration , new, this, method, caution

let studens = {
   name : "khai",
   age : 20,
   school: 'chau van liem'
};

//constructor function : thường viết đầu bằng chữ hoa và sử dụng từ new để tạo

function Studens(name, age, school){
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

let student2 = new Studens('an', 19, 'chau van liem');
console.log(student2.getName());