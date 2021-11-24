//for in trong obj duyệt qua các key

//Object.keys() -> trả về 1 mảng chứa tất cả các keys của object

//Object.value() -> trả về 1 mảng chứa các giá trị của object

//Object.entries  -> trả về 1 mảng chứa nested chứa các cặp key : value của object

//Object.assign() -> GỘP OBJECT

//Object.freeze(object) -> đóng băng object không cho chỉnh sửa object ban đầu

//Object.seal() -> cho phép sửa key value nhưng không đƯợc thêm key value mới

//CÁCH ĐỂ SAO CHÉP MỘT OBJECT {...object} HOẶC OBJECT.ASSIGN(đơn giản) HOẶC JSON.PARSE(JSON.STRINGTIFY())  

//TỪ KHÓA THIS TRONG OBJECT : ĐỀ CẬP ĐẾN OBJECT GẦN NHẤT
//hasOwnProperty(key) -> nếu object chứ key trả về true ngược lại trả về false

//object literal 
const objectListeral = {};
//object constructor 
const objectContructor = new Object();
 // truyền biến mới để làm key của obj thì phải thêm vào giữa []
const student = {
   name : 'khai',
   age: 18,
   male: true,
   'last-name':'khai',
   hi: function (){ // method : phương thức
      console.log('hello');
   }
}
      // dot notation
         console.log(student.age);
      // bracket notation
         console.log(student['last-name']); // 

      // thay đổi giá trị obj
student.age = 20;
         console.log(student.age);

      // thêm giá trị mới
      student.isDev = true;
      student.hello = function(){
         console.log('hi');
      }
         console.log(student.isDev);

      // xóa giá trị
      delete student["last-name"];
         console.log(student);

         
      //for in trong obj duyệt qua các key
      for(let key in student){
         if(key=== 'name'){
            console.log("hello name");
         }
         const value = student[key]
         console.log(`${key}: ${value}`);
         
      }

      //Object.keys() -> trả về 1 mảng chứa tất cả các keys của object
const keys =Object.keys(student)
console.log(keys);
console.log(keys.length);

      //Object.value() -> trả về 1 mảng chứa các giá trị của object

const value = Object.values(student)
console.log(value);

      //Object.entries  -> trả về 1 mảng chứa nested chứa các cặp key : value của object

const entries = Object.entries(student)
console.log(entries);

      //Object.assign() -> GỘP OBJECT

const a = {
   firstname: 'khai'
}
const b = {
   lastname: 'le'
}
const c = Object.assign(a,b)
console.log(c);

   //cách thứ 2
   const d = {...a,...b}
   console.log(d);

//Object.freeze(object) -> đóng băng object không cho chỉnh sửa object ban đầu
const info = {
   firstname: 'khai',
   school: 'cvl'
}
const freeze = Object.freeze(info)
info.class= '12bp' // dòng này được code sau khi freeze nên là không thể tạo ra key class được

console.log(info);

//Object.seal() -> cho phép sửa key value nhưng không đƯợc thêm key value mới

const user ={
   userName: 'khaile',
   school:{
      name: "chau van liem",
      room: {
         name: 'IT',
      },
   },
};
// const newUser= Object.seal(user)
// user.userName = 'khải lê' // chỉnh sửa được
// user.nickName = 'kai'; // không thêm được
// console.log(user);


console.log('---SAO CHÉP MỘT OBJECT---');
//CÁCH ĐỂ SAO CHÉP MỘT OBJECT {...object} HOẶC OBJECT.ASSIGN(đơn giản) HOẶC JSON.PARSE(JSON.STRINGTIFY())  
const newUser = {...user};
newUser.userName = 'an an';
console.log(newUser);


const newUser2 = Object.assign({}, user)
console.log(newUser2);

//sao chép 1 nested object (object phức tạp)
const newUser3= JSON.parse(JSON.stringify(user)) // biến tất cả thành CHUỖI  Json
newUser3.school.name= 'designer'
console.log('New User 3');
console.log(newUser3);


//TỪ KHÓA THIS TRONG OBJECT : ĐỀ CẬP ĐẾN OBJECT GẦN NHẤT

const student2 = {
   name : 'khai',
   age: 18,
   male: true,
   'last-name':'khai',
   hi: function (){ // method : phương thức
      console.log(`my name is ${this.name} and i am ${this.age} years old`);
   },
   fullName:{
      name: 'lê nguyên khải',
   }
}
student2.hi();

//OPTIONAL CHAINING : giúp clean code bằng cú pháp
 console.log(student2.fullName?.name);


 
//DESTRUCTURING OBJECT
// const {name, age, male,...rest} = student2;
// console.log(name, age, male);
// console.log(rest);
function whatYourInfo(obj){
   console.log(obj.name, obj.age, obj.school);

}
const newObj = {
   name : 'khai le',
   school: 'cvl',
   age: 18,
} 

whatYourInfo(newObj)


function whatYourInfo2({name, age, school}){
   console.log(name,age,school);

}
whatYourInfo2({
   name: 'anan',
   school: 'cvl',
   age: 19
})


