   //KHI THAO TÁC VỚI CLASSLIST THÌ CLASS ĐƯỢC TRUYỀN VÔ KHÔNG CÓ DẤU CHẤM ĐẰNG TRƯỚC

//1.selector.classList.add("abc")
   const container = document.querySelector(".container")
   console.log(container);
   container.classList.add("is-active")

// 2.selector.classList.remove("")
   container.classList.remove("container") // => chỉ còn is-active

// 3.selector.classList.contains("abc")
   console.log(container.classList.contains("is-active")) // true vì có is-active

// 4. selector.classList.toggle("is-active") : toggle (nếu có class đó rồi thì sẽ remove, nếu chưa có thì add vào)
   container.classList.toggle("is-active") // dòng này sẽ xóa class is-active

//5. selector.className -> trả ra chuỗi các class ,//nhièu class thì add bằng className

   const title =document.querySelector(".title")
   console.log(title.className);
   title.className = "class replace"
