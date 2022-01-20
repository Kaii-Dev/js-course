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
for(var z = 1; z<5; z++){
   setTimeout(function(){
      console.log(z); // z = 5
   }, 1000)
} 
   // lí do z = 5
      //var bị hoisting