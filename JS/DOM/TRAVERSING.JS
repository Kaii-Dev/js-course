// 1.parentNode, parentElement, removeChild
// parentNode vs parentElement

   const span = document.querySelector("span") 
   console.log(span.parentNode); 
   console.log(span.parentElement);
      console.log(span.parentNode.parentNode); 

// selector.parentNode hoặc selector.parentElement.removeChild(selector)

// span.parentNode.removeChild(span) // => mất thẻ span

// 2. nextElementSibling: tìm tới phần tử kế tiếp - previousElementSibling: tìm về phần tử trước đÓ

   const nextSpan = span.nextElementSibling; // lấy ra phần tử liền kề sau của class span
   console.log(nextSpan); // => <span class="span2">kai</span>
   const previousLink = span.previousElementSibling;
   console.log(previousLink);

//3. childNode: trả về 1 mảng các node bên trong BAO GỒM textNodes
      //children : trả về các node KHÔNG BAO GỒM textNode

   console.log(span.childNodes); // => nodeList [text: khoảng cách giữa các kí tự hoặc các thẻ, strong, text]
   console.log(span.children[1]); // HTMLcollection [strong]

// 4. firstChild vs firstElementChild

   console.log(span.firstChild); // #text
   console.log(span.firstElementChild); //  => <strong>khải lê</strong> : LẤY RA CON PHẦN TỬ ĐẦU TIÊN

// 5. lastChild vs lastElementChild

   console.log(span.lastChild); // #text
   console.log(span.lastElementChild); //  => <strong>an</strong> : LẤY RA CON PHẦN TỬ CUỐI

// 6. nextSibling vs previousSibling
   console.log(span.nextSibling); // => text: khoảng trống giữa 2 thẻ span
   console.log(span.previousSibling);




