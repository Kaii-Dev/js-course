   // 1.document.title

console.log(document.title);

   // 2.document.head
console.log(document.head);

// bài tập: hãy add thêm thẻ <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->

   const head = document.head
   const meta= document.createElement("meta")
   meta.setAttribute("name", "viewport")
   meta.setAttribute("content", "width=device-width, initial-scale=1.0")
   head.appendChild(meta)

   //cách 2
   // const head= document.getElementsByTagName("head")
   // head[0].appendChild(meta);
   // console.log(head);

   
   // 3.node.replaceChild(newnode, oldnode)

const span =document.createElement("span")
span.textContent= "abc";
document.body.replaceChild(span, document.querySelector(".boxed"))

   //convert htmlcollection , nodelist to array
   //2 cach: Array.from(htmlcollection or nodelist) HOAC [...htmlcollection]

