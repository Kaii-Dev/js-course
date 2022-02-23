// single thread  - đơn luồng

function task(message){
   let num = 1000000;
   while(num > 0){
      num--;
   }
   console.log(num);
   console.log(message);
}


// 1. CALL BACK