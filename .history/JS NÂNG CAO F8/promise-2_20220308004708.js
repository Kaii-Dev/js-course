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

   //ví dụ với promise.all

   const promise1 = new Promise(function(resolve, reject){

   });