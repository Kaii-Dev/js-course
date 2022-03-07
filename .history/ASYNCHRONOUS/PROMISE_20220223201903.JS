// các trạng thái của promise :  pending, resolve , reject

let buyIphone = true;
let willBuyIphone = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (buyIphone) {
         resolve('i have new iphone');
         console.log();
      } else {
         reject(' i dont have new iphone');
         console.log(object);
      }
   },3000);
})