// single thread  - đơn luồng

function task(message){
   let num = 1000000;
   while(num > 0){
      num--;
   }
   console.log(num);
   console.log(message);
}
console.log('start');
task('loading'); // đây là blocking script
console.log('end');

// 1. CALL BACK