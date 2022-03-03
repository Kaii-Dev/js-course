// sync / async

 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì sử dụng callback 


var promise = new Promise(
      //excutor   
   function(resolve, reject) {
      // thành công : resolve()
      // thất bại : reject()
   }
);

promise
   // khi resolve đc gọi thì then chạy
   .then(function(){

   })
   // khi reject đc gọi thì catch chạy
   .catch(function(){

   })
   .finally(function(){

   })
   