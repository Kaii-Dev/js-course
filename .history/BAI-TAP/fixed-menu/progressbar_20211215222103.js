const progress = document.querySelector(".progress");

window.addEventListener("scroll", function(){
   // console.log(scrollTop);
   const scrollTop = window.pageYOffset;
   //tinh ra chieu cao that cua document
   const height = document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
   console.log(height);
   const width = (scrollTop / height) * 100
   console.log(width);
})