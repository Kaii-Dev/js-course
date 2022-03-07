// single thread  - đơn luồng
// call stack : ngăn xếp chờ để gọi
// stack trace : lịch sử gọi

// EVENT LOOP: luôn theo dõi call stack và thằng queue, nếu queue có ele và call stack trống thì nó sẽ push ele của thằng queue vào call stack

//http://latentflip.com : tham khảo

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

// 1. CALL BACK : dùng để khắc phục blocking script. ĐI ĐÔI VỚI EVENT

console.log('start');
setTimeout(() => {
   task('loading');
}, 2000);
console.log('end');

//WEB APIs: timer (settimeout, setinterval...), fetch request, dom event

// callbacks hell

setTimeout(() => {
   console.log('run the first time');
   set
},5000);