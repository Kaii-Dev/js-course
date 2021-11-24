                     //Adjacent : LIỀN KỀ

      //1. element.insertAdjacentText
      const h3 = document.querySelector("h3")
         //cấu trúc : h3.insertAdjacentText("position (beforebegin, afterbegin, beforeend, afterend)", "string")

         h3.insertAdjacentText("beforebegin", "begin");
         h3.insertAdjacentText("afterbegin", "AFTER- BEGIN");
         h3.insertAdjacentText("beforeend", "BEFORE- END");
         h3.insertAdjacentText("afterend", "AFTER- END");
      
      // 2. element.insertAdjacentElement("position", node)
         const strong = document.createElement("strong");
         strong.classList.add("bold")
         strong.textContent = " hello" // thêm textcontent
         h3.insertAdjacentElement("beforeend", strong)

      // 3. element.insertAdjacentHTML("position", node)

      const template = 
      `<ul class= 'menu3'>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>`;
      document.body.insertAdjacentHTML("beforeend", template)
      
