// bản chất nó là PROMISE: sinh ra để làm code clean hơn
// AWAIT CHỈ SỬ DỤNG ĐƯỢC TRONG FUNCTION CÓ SỬ DỤNG ASYNC

function wait(timer=0){
   return new Promise(function(resolve, reject){
      setTimeout(resolve, timer);
   });
}
async function run(){
   console.log('starting');
   await wait(2000);
   await wait(4000);
   console.log('ending');
}
run();