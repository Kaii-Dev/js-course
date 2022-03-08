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

 //2. ENHANCED OBJECT LITERAL : định nghĩa key-value cho obj theo kiểu ngắn gọn, định nghĩa key theo obj dưới dạng biến

   // VÍ DỤ 1
 var name = 'javascript';
 var price = 1000;
 var course= {
      //style cũ
   //  nameCourse : name,
   //  priceCourse : price
      // ES6
   name,
   price,
   getName(){
      return this.name;
   }
 }
 console.log(course);

   //VÍ DỤ 2
   var fieldName = 'new-name';
   var fieldPrice = 'price';
   const course1 = {
      name : 'javascript',
      [fieldName]: 'javascript',
      [fieldPrice]: 1000,
   }
   console.log(course1);

//3 DEFAULT PARAMETER VALUES : với những tham số không bắt buộc truyền vào thì xài default parameter values

 function logger (log = 'gia tri mac dinh'){
   console.log(log);
 }
 logger();

 // 4. DESTRUCTURING : phân rã các thành phần của 1 object, array, string, number, boolean, null, undefined

 var arr = ['php', 'javascript', 'html'];
 var [a,b,c] = arr;
console.log(object);