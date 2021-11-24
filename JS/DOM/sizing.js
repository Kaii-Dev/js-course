         // 1.offSet

const boxed = document.querySelector(".boxed")
console.log(boxed.offsetHeight) // => 200px : độ cao của phần tử
console.log(boxed.offsetLeft) // => vị trí của nó so với bên trái
console.log(boxed.offsetWidth) // => độ rộng của phần tử
console.log(boxed.offsetTop) // => vị trí của nó so với phía trên
console.log(boxed.offsetParent) // => lấy ra phần tử cha để lấy ra giá trị


         // 2. các thuộc tính liên quan đến client
console.log(boxed.clientWidth) // => lấy độ rộng của phần tử trừ đi border
console.log(boxed.clientHeight) // => lấy độ cao của phần tử trừ đi border
console.log(boxed.clientLeft) // => vị trí của nó so với bên trái boder
console.log(boxed.clientTop) // => vị trí của nó so với bên trên boder


         // 3. các thuộc tính liên quan đến window
console.log(window.innerHeight) //
console.log(window.innerWidth) //
console.log(window.outerHeight) //
console.log(window.outerWidth) //

         // 4. selector.getBoundingClientRect() => lấy ra tọa độ, kích thước của phần tử  
console.log(boxed.getBoundingClientRect()); 
   //left, x : vị trí của khối so với bên trái
   //top: vị trí của khối so với phía trên
   //bottom: chiều cao của khối + top
   //right: độ rộng của khối + left
   //width : độ rộng
   //height : chiều cao


         // 5. SỰ KHÁC NHAU CỦA NODELIST VÀ HTMLCOLLECTION
const li = document.getElementsByTagName("li") //htmlcollection
const li2 =document.querySelectorAll("li") //nodelist
console.log(li);
console.log(li2);
         //giống : có thể truy cập bằng index, có độ dài, giống mảng nhưng ko sử dụng đƯợc pop, shift, map, push, filter
         //html collection: không thể xài được forEach
         //nodelist: xài được forEach

   for(let i = 0; i <li.length; i++){
      console.log(li[i]);
   }

         //6. sự khác nhau giữa PARENTNODE VÀ PARENTELEMENT
      // parentElement: có thể null
      //document.documentElement -> lấy thẻ HTML
console.log(document.documentElement.parentElement); // null
console.log(document.documentElement.parentNode); // vì không có phần tử bao ngoài vì nó lớn nhất nên nó sẽ lấy chính nó => #document








