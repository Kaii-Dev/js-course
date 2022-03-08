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

 // 4. DESTRUCTURING + 5. REST PARAMETER: phân rã các thành phần của 1 object, array, string, number, boolean, null, undefined

 var arr = ['php', 'javascript', 'html', 'css'];
 var [a, ,c] = arr;
console.log(a,c);
var [a, ...rest] = arr; // lấy những thằng còn lại
console.log(rest);

var cars = {
   name : 'BMW',
   price: 2000,
   image : 'image-address',
   children: {
      name : 'audi'
   }
};
var {name: parentName , children: { name}} = cars
console.log(name);

//6 TAGGED TEAMPLATE LITERAL:

function highLight([first, ...strings], ...values){
   return values.reduce(
      (acc, curr)=> [...acc, `<span>${curr}</span>`, strings.shift()], [first]) // [first] : là giá trị khởi tạo
      .join("");
}
const brand = 'F8';
const lang = 'javascript'

const html = highLight`hoc lap trinh ${lang} tai ${brand}!`;
console.log(html);

//7 MODULES : import, export. muốn xài thì link script phải có type="module" vào. một module chỉ 1 export default

//khi mà import mà không có destruturing thì đó là import

import loggerTest from './export.js';
import {
   TYPE_ERROR,
   TYPE_LOG,
   TYPE_WARN
 }from './constant.js';
loggerTest('test message...', TYPE_WARN)

