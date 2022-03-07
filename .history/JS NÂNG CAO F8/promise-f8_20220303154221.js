// sync / async

 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì sử dụng callback 

//trạng thái của promise : pending, resolve, reject
var promise = new Promise(
      //excutor   
   function(resolve, reject) {
      // thành công : resolve()
      // thất bại : reject()
      resolve([
         {
            id: 1,
            name: 'javascript'
         }
      ]);
   }
);

promise
   // khi resolve đc gọi thì then chạy
   .then(function(courses){
      console.log("courses");
   })
   // khi reject đc gọi thì catch chạy
   .catch(function(courses){
      console.log("failure");
   })
   // resolve hoặc reject đc gọi thì finally chạy
   .finally(function(courses){
      console.log("finally");
   })
   