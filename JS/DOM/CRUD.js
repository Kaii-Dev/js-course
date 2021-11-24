// thêm xóa sửa node trong js

   //1. tạo ra các element trong js: document.createElement("tag")
   const div = document.createElement("div"); 

   //2. selector.appendChild : cho ele xuất hiện
   const body = document.body
   body.appendChild(div)

   //3.add  
   div.classList.add("test") // add thêm class
   div.className= ("test class") // đổi tên class

   div.textContent= "hello khải đẹp trai" //add thêm textcontent
   div.innerHTML = `<div class="container"><h3>đây là heading</h3></div>`// add thêm innerHTML
   div.setAttribute("data-name", "khaile")// add thêm attribute



// bài tập tạo ra thẻ div có class là card, trong thẻ div có thẻ img với src="https://source.unsplash.com/random", alt, class = "card-image"

   const divCard = document.createElement("div")
   // const body = document.body
   body.appendChild(divCard)
   divCard.setAttribute("class","card")

   const img = document.createElement("img");
   divCard.appendChild(img)
   img.setAttribute("src", "https://source.unsplash.com/random")
   img.setAttribute("class", "card-image")
 
   //cách 2
         // function setAttribute(ele, attr){
         //    for(var key in ele){
         //       ele.setAttribute(key, attr[key]);
         //    }
         // }
         // setAttribute(img,
         //    {
         //       "src":"https://source.unsplash.com/random",
         //       "class": "card-image",
         //       "alt": "#",

         // })

   //3. document.createTextNode
   const text = document.createTextNode("hello my name is khải lê")
   const h1 = document.createElement("h1");
   h1.appendChild(text);
   body.appendChild(h1)

   //4. element.cloneNode
   const h1Clone= h1.cloneNode(true) // nếu để là true thì sẽ clone hết nội dung còn không để gì thì chỉ có thể sao chép cái thẻ
   body.appendChild(h1Clone)

   //5 element.hasChildNode : kiểm tra phần tử có con hay không
   console.log(h1.hasChildNodes()); // => true, vì chữ "hello my name is khải lê " cũng là textnode
   