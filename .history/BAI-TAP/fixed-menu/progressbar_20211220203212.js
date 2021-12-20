const progress = document.querySelector(".progress");

window.addEventListener("scroll", function(){
   // console.log(scrollTop);
   const scrollTop = window.pageYOffset;
   //tinh ra chieu cao that cua document bao goofm scrollbar document.documentElement.scrollHeight
   //tinh ra chieu cao  cua document bao goofm scrollbar document.documentElement.scrollHeight
   const height = document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
   console.log(height);
   const width = (scrollTop / height) * 100
   // console.log(width);
   progress.style.width = `${width}%`;
})