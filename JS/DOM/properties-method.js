//attribute: thuộc tính của thẻ như: href, id, class, src, style

         //getAttribute
const linkSearch = document.querySelector('.link');
console.log(linkSearch.getAttribute("href")); // clấy ra ít

const liSearch = document.querySelectorAll(".item") // lấy ra thông qua nodelist
   //li.getAttribute("class")
   liSearch.forEach((GetItem)=>{
      console.log(GetItem.getAttribute("class"));
   })
   console.log(liSearch);


         //selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó
linkSearch.setAttribute("target", "_blank"); // trường hợp set 1 thẻ

const linkList = document.querySelectorAll("a.link") // trường hợp set nhiềU thẻ
linkList.forEach(item => item.setAttribute("target", "_blank"))



      //selector.removeAttritbute("attribute")
const p = document.querySelector("#spinner")
p.removeAttribute("style")


      //selector.hasAttritbute("attribute")
console.log(p.hasAttribute("class")); // nếu có thì ra true

