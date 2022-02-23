// single thread  - đơn luồng

function task(){
   let num = 1000000;
   while(num > 0){
      num--;
   }
   console.log(num);
   console.log(message);
}
console.log('start');
task('loading');
console.log('end');