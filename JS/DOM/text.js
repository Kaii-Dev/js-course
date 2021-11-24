//text: những cái nằm giữa thẻ mở và thẻ đóng
      //1. textcontent: lấy luôn khoảng trắng và các thẻ bên trong text đó
      const spinner = document.querySelector("#spinner")
//thay đổi textcontent bằng cách gán ví dụ: spinner.textContent = "...";
      console.log(spinner.textContent); 



      //2. innerText : loại bỏ hết khoảng trắng, và các thẻ html trong đó
      console.log(spinner.innerText); 

      //3 innerHTML : lấy ra nội dung của selector bao gồm cả HTML
      console.log(spinner.innerHTML);
      spinner.innerHTML = `<div class="demo"> hi khải ahihi</div>` // nó sẽ chuyển đổi dòng này thành html