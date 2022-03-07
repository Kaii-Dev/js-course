// các trạng thái của promise :  pending, resolve , reject
// các phương thức của promise : then, catch, finally
// new Promise(function(resolve, reject) => {})
let buyIphone = true;
let willBuyIphone = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (buyIphone) {
         resolve('i have new iphone');
         console.log('ok');
      } else {
         reject(' i dont have new iphone');
         console.log('not ok');
      }
   },3000);
})

console.log(willBuyIphone);

   // 1. then (fullfilled, reject)
