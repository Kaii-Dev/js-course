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

window.addEventListener("scroll", debouncefn(function(event){
   const scrollY= window.pageYOffset;
   console.log(scrollY);
   if(scrollY >=67){
      header.classList.add("is-fixed");
   }else{
      header.classList.remove("is-fixed");
   }
}),)