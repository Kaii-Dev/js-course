// PROMISE.RESOLVE
// PROMISE.REJECT
// PROMISE.ALL

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
         resolve[1]);
      });
   });
   const promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
         resolve([2]);
      });
   });

   Promise.all([promise1, promise2])
   .then(function(result){
      console.log(result);
   })