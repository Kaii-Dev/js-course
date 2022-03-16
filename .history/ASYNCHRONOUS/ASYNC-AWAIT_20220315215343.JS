// bản chất nó là PROMISE: sinh ra để làm code clean hơn
function wait(timer=0){
   return new Promise(function(resolve, reject){
      setTimeout(resolve, timer);
   });
}
function run(){
   console.log('starting');
   wait(2000);
   console.log('ending');
}