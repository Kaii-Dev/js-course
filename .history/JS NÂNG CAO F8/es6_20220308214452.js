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

 //2. ENHANCED OBJECT LITERAL : định nghĩa key-value cho obj theo kiểu ngắn gọn

 var name = 'javascript';
 var price = 1000;

 var course= {
   //  nameCourse : name,
   //  priceCourse : price
   
 }

 console.log(course);