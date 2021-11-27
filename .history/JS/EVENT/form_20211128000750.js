const input = document.querySelector(".input");

//event.key : kiểm tra xem phím mình nhập vào là phím gì

// 1.KEYDOWN : khi nhấn bàn phím xuống

input.addEventListener("keydown", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      console.log("bạn đã bấm enter");
      event.preventDefault();
   }
})

// 2.KEYUP : khi nhấn bàn phím xuống rồi thả phím ra thì sẽ chạy, KHÔNG XÀI ĐƯỢC event.preventdefault vì keyup là sự kiện xảy ra sau

input.addEventListener("keyup", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      console.log("bạn đã thả phím enter");
      event.preventDefault();
   }
})

//3. KEYPRESS: sự kiện này xảy ra khi nhấn phím nhưng sẽ từ chối các phím delete, arrow, pageup, pagedown, home, ctrl, alt, esc... KEYDOWN > KEYPRESS > KEYUP

input.addEventListener("keypress", function(e){
console.log(e.key);
})

//4. CHANGE : xảy ra khi gõ phím xong rồi nhấn ra ngoài  hoặc nhấn enter (1 lần)

input.addEventListener("change", function(event){
   console.log("on change is working");
})


// 5.FOCUS : khi nhấn chuột vào input

input.addEventListener("focus", function(event){
   console.log("input is working");
})

// 