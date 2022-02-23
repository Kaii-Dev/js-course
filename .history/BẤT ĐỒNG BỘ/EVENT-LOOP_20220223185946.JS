// single thread  - đơn luồng

function task(message){
   let num = 1000000;
   while(num > 0){
      num--;
   }
   console.log(num);
   console.log(message);
}
// console.log('start');
// task('loading'); // đây là blocking script bởi vì phải đợi nó thực thi xong thì clg('end') mới chạy tiếp
// console.log('end');

// 1. CALL BACK

console.log('start');
setTimeout(() => {
   task('loading');
}, 2000);
console.log('end');

//WEB APIs: timer (settimeout, setinterval, fetch request, dom event