//debounce giup do ton tai nguyen
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

const header= document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
window.addEventListener("scroll", debounceFn(function(event){
   const scrollY= window.pageYOffset;
   
   if(scrollY >=headerHeight){
      header.classList.add("is-fixed");
      document.body.style.paddingTop = headerHeight;
   }else{
      header.classList.remove("is-fixed");
   }
}, 100)
);