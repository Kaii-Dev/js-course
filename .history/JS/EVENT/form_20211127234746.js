const input = document.querySelector(".input");

//event.key : kiểm tra xem phím mình nhập vào là phím gì

// 1.keydown : khi nhấn xuống

input.addEventListener("keydown", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      console.log("bạn đã bấm enter");
   }
})