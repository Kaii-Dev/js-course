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
      console.log("successfully");
   })
   // khi reject đc gọi thì catch chạy
   .catch(function(){
      console.log("failỷ");

   })
   // resolve hoặc reject đc gọi thì finally chạy
   .finally(function(){

   })
   