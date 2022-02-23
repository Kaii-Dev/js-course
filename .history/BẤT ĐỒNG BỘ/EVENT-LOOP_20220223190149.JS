// single thread  - đơn luồng

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

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

//WEB APIs: timer (settimeout, setinterval...), fetch request, dom event