// sync / async

 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì sử dụng callback 

//trạng thái của promise : pending, resolve, reject
var promise = new Promise(
      //excutor   
   function(resolve, reject) {
      // thành công : resolve()
      // thất bại : reject()
      //fake call api
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
      console.log(courses);
   })
   // khi reject đc gọi thì catch chạy
   // hiện lỗi đỏ in promise  = không bắt lỗi trong promise
   .catch(function(error){
      console.log(error);
   })
   // resolve hoặc reject đc gọi thì finally chạy
   .finally(function(courses){
      console.log("finally");
   })
   

   //câu hỏi phỏng vấn: promise sinh ra xử lý bất đồng bộ, trước khi có promise thì ngta sử dụng call back -> nhưng call back dễ bị callback hell

   //để tạo ra promise thì sử dụng contrsuctor new Promise, sau đó truyền vào function executor gồm resolve và reject , resolve gọi nó khi logic là thành công, reject là thất bại. sau đó truyền vào then và catch để xử lý logic thành công và thất bại. finally để xử lý logic sau khi resolve hoặc reject.