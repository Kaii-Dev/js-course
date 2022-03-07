// PROMISE.RESOLVE
// PROMISE.REJECT
// PROMISE.ALL

const promise = Promise.resolve('Success')

promise
   .then((result)=>{
      console.log('result:', result);
   })
   .catch((error)=>{
      console.log('error:', error);
   })