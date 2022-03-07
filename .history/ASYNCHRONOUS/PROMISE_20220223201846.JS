// các trạng thái của promise :  pending, resolve , reject

let buyIphone = true;
let willBuyIphone = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (buyIphone) {
         resolve('i have new iphone');
      } else {
         reject(' i dont no iphone');
      }
   },3000);
})