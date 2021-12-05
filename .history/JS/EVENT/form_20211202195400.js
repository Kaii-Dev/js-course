const input = document.querySelector(".input");

//event.key : kiểm tra xem phím mình nhập vào là phím gì

// 1.KEYDOWN : khi nhấn bàn phím xuống
input.addEventListener("keydown", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      // console.log("bạn đã bấm enter");
      event.preventDefault();
   }
})


// 2.KEYUP : khi nhấn bàn phím xuống rồi thả phím ra thì sẽ chạy, KHÔNG XÀI ĐƯỢC event.preventdefault vì keyup là sự kiện xảy ra sau

input.addEventListener("keyup", function(event){
   // console.log(event.key); //
   if(event.key =="Enter"){
      // console.log("bạn đã thả phím enter");
      event.preventDefault();
   }
})

//3. KEYPRESS: sự kiện này xảy ra khi nhấn phím nhưng sẽ từ chối các phím delete, arrow, pageup, pagedown, home, ctrl, alt, esc... KEYDOWN > KEYPRESS > KEYUP

input.addEventListener("keypress", function(e){
// console.log(e.key);
})

//4. CHANGE : xảy ra khi gõ phím xong rồi nhấn ra ngoài  hoặc nhấn enter (1 lần)

input.addEventListener("change", function(event){
   // console.log("on change is working");
})


// 5.FOCUS : khi nhấn chuột vào input hay text area...

input.addEventListener("focus", function(event){
   // console.log("input is working");
})

// 6.BLUR : khi đang focus mà nhấn ra ngoài

input.addEventListener("blur", function(event){
   // console.log("BLUR is working");
})


// 7. SUBMIT :

// const form= document.querySelector(".form");
// form.addEventListener("submit", function(e){
//    e.preventDefault(); // chặn sự kiện mặc định
//    //this, e.target : cchủ thể để lay ra value
//    //this.elements => tra ra cai mang
//    console.log(this.elements);
//    console.log(this.elements["username"].value);// lay ra gia tri cua name value, co gia tri la input nhap vao
//    const username= this.elements['username'].value;
//    const gender= this.elements['gender'].value;

//    //lay ra du lieu checkbox
//    const hobby= this.querySelectorAll(`input[name='hobby']`);
//    let hobbyValue = [];

//    [...hobby].forEach(item => hobbyValue.push(item.value))
//    console.log(hobbyValue);
//    console.log({username, gender, hobbyValue});
// })


// 8.VALIDATION
const form= document.querySelector(".form");
form.addEventListener("submit", function(e){
   e.preventDefault();
   const username= this.elements["username"].value;
   const pass = this.elements["password"].value;
   if(!username) {
      alert("pls enter username")
      return;
   }
   if(!pass) {
      alert("pls enter pass")
   }
})