const input = document.querySelector(".input");

//event.key : kiểm tra xem phím mình nhập vào là phím gì

// 1.keydown : khi nhấn bàn phím xuống

input.addEventListener("keydown", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      console.log("bạn đã bấm enter");
      event.preventDefault();
   }
})

// 2.KEYUP : khi nhấn bàn phím xuống rồi thả phím ra thì sẽ chạy, không xài được event.preventdefault vì keyup là sự kiện xảy ra sau

input.addEventListener("keyup", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      console.log("bạn đã thả phím enter");
      event.preventDefault();
   }
})