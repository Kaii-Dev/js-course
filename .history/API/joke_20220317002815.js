const heading = document.querySelector(".joke-heading");
const btn = document.querySelector(".joke-button");
const endpoint = "https://icanhazdadjoke.com/";

async function getJoke(){
   // cái api này lúc trả về mặt định là dạng text/html nên chuyển về json không được, vì thế nên cần phải truyền vào obj và key header để access
   const response = await fetch(endpoint, {
      headers: {
         Accept: "application/json"
      }
   })
   const data= await response.json()
   console.log(data);
   return data;
}
getJoke();