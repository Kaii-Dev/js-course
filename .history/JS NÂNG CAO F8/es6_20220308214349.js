// 1 CLASS

 class Course {
      constructor(price, name) {
         this.price = price;
         this.name = name;
      }
      getName(){
         return this.name;
      }
   }
      

 const phpCourse = new Course(100, 'PHP');
 const jsCourse = new Course(200, 'JS');

 console.log(phpCourse.getName());
 console.log(jsCourse);

 //2. ENHANCED OBJECT LITERAL

 var name = 'javascript';
 var price = 1000;

 var course= {
    name : name,
    price : price
 }