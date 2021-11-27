const button= document.querySelector(".button");

//mousemove , mouseover, mouseenter, mouseleave

   //mousemove : để chuột di chuyển trong phần tử thì sự kiện sẽ chạy ra
   // button.addEventListener("mousemove", function(event){
   //    console.log("mouse move");
   // })

   // //mouseover : khi rê chuột vào phần tử đó hoặc con của nó
   // button.addEventListener("mouseover", function(event){
   //    console.log("mouse over");
   // })

   // //mouseenter : khi rê chuột vào CHÍNH phần tử đó thì mới active
   // button.addEventListener("mouseenter", function(event){
   //    console.log("mouse enter");
   // })
   //mouseleave : khi rê chuột từ phần tử đó RỒI RỜI ĐI THÌ MỚI KÍCH HOẠT
   // button.addEventListener("mouseleave", function(event){
   //    console.log("mouse leave");
   // })


// các tọa độ của chuột

   //pageX, pageY, clientX, clientY;

   document.addEventListener("mousemove", function(event){
      console.log(`pageY: ${event.pageY}`);
      console.log(`clientY: ${event.clientY}`);
   })
// clientY: chỉ lấy tọa độ theo viewport
   // pageY : bao gồm tọa độ của document khi scroll xuống