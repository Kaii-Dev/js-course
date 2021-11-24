const accordionHeader= document.querySelectorAll(".accordion-header"); //=> trả ra node list

[...accordionHeader].forEach((item)=> item.addEventListener("click", handleClickAccordion));

// .accordion-header *{
//    pointer-events: none;
// } CSS này dùng để trả về cái event.target đúng như mong muốn khi click vào
                                                                  
function handleClickAccordion(event){
   // console.log(event.target.firstChild);
   const content =event.target.nextElementSibling;
   // console.log(event.target);
   
   content.style.height = `${content.scrollHeight}px`; //scrollHeight: chiều cao phần tử bao gồm padding
   content.classList.toggle("is-active")
   if(!content.classList.contains("is-active")){
      content.style.height = "0px";
   }

   const icon = event.target.querySelector(".icon") // lúc này event.target đang là accordion header nên có thể query vô thằng con
   icon.classList.toggle("fa-angle-down");
   icon.classList.toggle("fa-angle-up");
}