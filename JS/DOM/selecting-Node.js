                     //DOM : document object model 
                     // dom node: html, body, script..
                     // dom attribute : href, src...
                     // selectors : p, body, #heading, .header (các thẻ, id, class)

   //BÀI 2: SELECTING NODE
            //2.1 document.querySelector (selector) => trả về 1 node nếu tồn tại selector đó , không có thì trả về null
            
         const singleNode = document.querySelector("h1")
         const singleNode2 = document.querySelector(".container")
         const singleNode3 = document.querySelector("#spinner")
         const singleNode4 = document.querySelector("#abc") // ra null vì id abc chưa có
            console.log(singleNode3);

            //2.2 document.querySelectorAll (selector) => trả về 1 NodeList chứa danh sách các Node nếu không có thì trả về empty

               // nó có thể loop (for, for of, forEach) giống mảng nhưng không thể sử dụng các phương thức như, push, pop...

         const multiNode = document.querySelectorAll(".item")
         console.log(multiNode); // => nodelist [li.item]

            // 2.3 document.getElementsByClassName("className") -> trả về một HTMLCollection chứa danh sách các node, nếu khôngc có thì trả về empty . CHÚ Ý: NẾU TRUYỀN VÀO CLASS THÌ KHÔNG CẦN "."

         const classNode = document.getElementsByClassName("item");
         console.log(classNode); 

            // 2.4 document.getElementsByTagName("TagName") (tagname là các thẻ)
         
         const tagNode = document.getElementsByTagName("li")
         console.log(tagNode);
            
            //2.5 document.getElementsById('id') -> trả về 1 node
         
         const idNode = document.getElementById('spinner')
         console.log(idNode);

         // 3. insertBefore
      // cấu trúc node.insertBefore(newnode, existingNode)
      const ul = document.querySelector("ul")
      console.log(ul);
      document.body.insertBefore(ul, document.querySelector(".container"))


