// các trạng thái của promise :  pending, resolve , reject

let buyIphone = true;
let willBuyIphone = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (buyIphone) {
         resolve('iphone');
      } else {
         reject('no iphone');
      }
   },3000);
})