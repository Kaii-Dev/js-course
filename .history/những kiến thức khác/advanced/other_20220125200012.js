// 1. sự khác nhau giữa i++ và ++i
   let i= 1;
   let j= i++
   console.log(i,j); // i=2, j=1  gán j trước rồi mới tăng i
   let a= 1;
   let b= ++a;
   console.log(a,b); // a=2 , b=2

//2. 2 cách chuyển đổi dữ liệu mới
   const str = "123";
   console.log(+str); // chuyển sang number
   console.log(!!str); // true. convert sang boolean. 
   console.log(Array.from(str)); // convert sang mảng

//3. arguments : mảng nhưng không phải mảng
   function number(a,b,c){
      console.log(arguments);
      // console.log(arguments[0]);
      return a+b+c
   ;}
   number(1,2,3);

//4. closure in loop
// var z
for(var z = 1; z < 5; z++){
   setTimeout(function(){
      console.log(z); // z = 5
   }, 1000)
} 
   // lí do z = 5
      //var bị hoisting
      // scope của var (global scope) sau mỗi vòng lặp thì nó không thay đổi
      // cách fix thay var bằng let(block scope)

//5. sự khác nhau giữ localStorage và sessionStorage
   //local storage : tắt tab vẫn còn lưu mở lên vẫn còn
   // sessionStorage : tăt tab sẽ mất

//6. những trường hợp không nên sử dụng arrow function:
   //6.1 event handler
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
   console.log(this.value);
})
   //6.2 obj
      const student = {
         counter: 0,
         increment: () => {
            return ++this.counter; //this không tìm được phương thức gần nhất nên bị lỗi
         },
      };
      console.log(student.increment());

// 8. ĐỆ QUY : gọi lại chính nó
const complexArr = [[1,2,3], [3,4,5], [[2,3], [2,3,4]]];
// ket qua mong muon [1,2,3,3,4,5,2,3,2,2,3,4]
      //cach 1
      // console.log(complexArr.flat(Infinity));
      //cach 2
      function flatArr(arr, deep){
         
      } //deep: độ sâu

