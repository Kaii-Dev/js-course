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

   // 1. then (onFullFilled, onRejected)

   function makePromise(buyIphone){
      return new Promise (function(resolve,reject){
         setTimeout(() => {
            if (buyIphone) {
               resolve('oh yeah!! i have new iphone');
            } else {
               reject(' NO!!! i dont have new iphone');
            }
         },3000);
      })
   }
   let haveIPhone = makePromise(true);
   //onFullFilled -> resolve
   //onRejected -> reject
   // then yêu cầu luôn phải có 2 phần tử onfullfiled và onrejected, nếu không sử dụng phải để nó là undefined
   haveIPhone.then( 
      success => console.log(success), //đây là call back . lúc này success là giá trị trả về của resolve
      reason => console.log(reason) //đây là call back. lúc này reason là giá trị trả về của reason
   )