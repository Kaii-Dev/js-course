const header= document.querySelector(".header");
window.addEventListener("scroll", function(event){
   const scrollY= window.pageYOffset;
   console.log(scrollY);
   if(scrollY >=67){
      header.classList.add("is-fixed");
   }else{
      header &&header.classList.remove("is-fixed");
   }
})