// PROMISE.RESOLVE
// PROMISE.REJECT
// PROMISE.ALL : xử lý 2 luồng cùng lúc để tiết kiệm tgian

const promise = Promise.resolve('Success'); // cách khởi tạo này dùng khi xác định được nó từ đầu là resolve hay reject

promise
   .then((result)=>{
      console.log('result:', result);
   })
   .catch((error)=>{
      console.log('error:', error);
   })

   //ví dụ với promise.all: nối 2 mảng từ kết quả của 2 promise lại thành 1

   const promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
         resolve([1]);
      },1000);
   });
   const promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
         resolve([2,3]);
      },3000);
   });

   Promise.all([promise1, promise2])
   .then(function(result){
      const arr1= result[0];
      const arr2= result[1];
      console.log(arr1.concat(arr2));
   })