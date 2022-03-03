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
   .then(function(){

   })
   .catch(function(){

   })
   .finally(function())
   