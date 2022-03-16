// bản chất nó là PROMISE: sinh ra để làm code clean hơn
function wait(timer=0){
   return new Promise(function(resolve, reject){
      setTimeout(resolve, timer);
   })
}