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

//3. arguments : mảng nhưng không phải mảng
function number(a,b,c){
   console.log(arguments);
   console.log(arguments)[0];
}
number(1,2,3);