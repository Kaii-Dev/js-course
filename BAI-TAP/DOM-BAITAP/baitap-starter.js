//viet fn tao ra thogn bao

function createNoti(title = 'Welcome to notification'){
   const template = `<div class="noti">
      <img src="https://source.unsplash.com/random" alt="" class="noti-image">
      <div class="noti-content">
         <h3 class="noti-title">${title}</h3>
         <p class="noti-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam minus vitae ipsa architecto laboriosam cum
         </p>
      </div>
   </div>`;
   //insertAdjacentHTML
   document.body.insertAdjacentHTML("afterbegin",template)
}

const randomData =['welcome to js', 'to day is a good day', 'welcome to tutorial']

let lastTitle;
 
const timer= setInterval(function(){
   const item = document.querySelector(".noti")
   if(item){
      item.parentNode.removeChild(item); // truy cứu đến nút cha của item => nút body, sau đÓ từ nút body xóa element có class là noti
   }
   //Math.random() * randomData.length: random theo độ dài của mảng
   const randomTitle = randomData[Math.floor(Math.random() * randomData.length)] 

   if(lastTitle !== randomTitle){

      createNoti(randomTitle);
   }
   lastTitle = randomTitle;
},5000);