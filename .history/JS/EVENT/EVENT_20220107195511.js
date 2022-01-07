//event: keydown, keyup, mouseover, mousemove
//handler : fn để xử lý
//options : capture (obj), bubbling

   // 1. thêm sự kiện : selector.addEventListener("eventName", handler, [options])
   const btn = document.querySelector(".button")
   const span = document.querySelector(".button span") 
      function handleClick(){
         console.log("click button");
      }

   btn.addEventListener("click", handleClick)

   // span.addEventListener("click", function(e){ //event : e
   //    //e.stopPropagation() // giúp click hoạt động trên chính nó mà ko bị bubbling sang cái khác (ngăn cản event ảnh hưởng tới phần tử cha)
   //    // e.stopImmediatePropagation();
   //    console.log("click span");
   // }
   // )
      // span.addEventListener("click", function(e){
      //    e.stopPropagation();
      //    console.log("click span 2");
      // }
      // )
      // document.body.addEventListener("click", function(){
      //    console.log("click body");
      // }
      // )

   //BUBBLING : NỔI BỌT - sự kiện click sẽ chạy từ trong ra ngoài khiến cho 2 thẻ hoạt động cùng lúc, ví dụ : khi bấm vào button thì thằng span sẽ đc thực thi trước thằng button
            //e.stopPropagation() : ngăn chặn nổi bọt
            //e.stopImmediatePropagation(); ngăn chặn vip hơn khi 1 element có nhiều event


   //CAPTURE : KHÁC VỚI BUBBLING, CAPTURE SẼ CHẠY TỪ NGOÀI VÀO TRONG

   
   //TARGET vs currentTarget : đọc thêm tại https://viblo.asia/p/su-khac-nhau-giua-nhung-dieu-tuong-giong-nhau-phan-4-jvEla9Lmlkw
   
   //e.target và e.currentTarget thường dùng trong Event Delegation (Hiểu nôm na là "lan truyền sự kiện", giả sử element button là child element của element div thì khi sự kiện click diễn ra ở element button, sau đó sự kiện click sẽ "lan truyền" tới parent element của nó, tức là element div)
//Khi mình bắt sự kiện ở element div với addEventListener, trong hàm callback, nếu mình dùng e.currentTarget nó sẽ trả về element đang được bắt sự kiện, tức là element div. Còn nếu mình dùng e.target thì nó sẽ trả về nguồn gốc của sự kiện đó, tức là coi ai lan truyền cái sự kiện này, do đó nó sẽ trả về element button
   btn.addEventListener("click", function(event){
      //event.target: là yếu tố ĐÃ kích hoạt sự kiện click hoặc sự kiện gì đó
      console.log(`event.target: ${event.target}`);
      //event.currentTarget: là phần tử mà evenListener được gắn vào 
      console.log(`event.currentTarget: ${event.currentTarget}`);
      once : true
   })


   //event.preventDefault() : dùng để ngăn chặn hành vi mặc định của 1 thẻ để làm thức gì đó
   const link = document.querySelector(".link")
   link.addEventListener("click", function(event){
      event.preventDefault();
      console.log("click me");

      console.log(event.target);
      console.log(event.target.style);

      //selector.style.property = value : set thuộc tính cho thẻ style
         //event.target.style

      //lấy custom attribute: custom attribute la`(data-AttributeName = "value")

         //cách lấy custom attribute : event.dataset.AttributeName
         const name = event.target.dataset.nameXyz
         console.log(name);
   })


   //selector.matches(): kiểm tra ele có khớp hay không (mang tính kiểm tra)
   //selector.contains(): kiểm tra ele có chứa ele khác hay không





   

   