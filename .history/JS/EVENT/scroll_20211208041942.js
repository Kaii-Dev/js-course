   window.addEventListener(
      "scroll",
      debounceFn(function (e) {
      console.log("scroll");
      }, 50)
   );
 // 2. debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
   function debounceFn(func, wait, immediate) { // hàm debounce mẫu
      let timeout;
      return function () {
      let context = this,
         args = arguments;
      let later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
      };
   }

   // 3.window.pageYOffset và window.pageXOffset
      // window.pageYOffset : khoảng cách scroll của window theo chiều dọc so với phía trên cùng
      // window.pageYOffset : khoảng cách scroll của window theo chiều dọc so với phía bên trái
   

   /** 4. scrollTOp, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth
    * scrollHeight : trả về chiều cao của element bao gồm padding, nhưng không có boder
    * 
    * scrollWidth : trả về chiều rộng của ele bao gồm padding , nhưng không có border
    * 
    * scrollTop : scroll trong ele khac voi scroll trong window cua scrollwidth
    */

   // scroll
   const boxed = document.querySelector(".boxed");
   boxed.addEventListener("scroll", function (e){
      console.log(boxed.scrollTop);
   })