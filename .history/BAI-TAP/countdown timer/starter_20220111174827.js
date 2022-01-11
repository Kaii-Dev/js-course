window.addEventListener("load", function(){
   const days = document.querySelector(".days");
   const hours = document.querySelector(".hours");
   const minutes = document.querySelector(".minutes");
   const seconds = document.querySelector(".seconds");
   function countdown(date){
      const now = new Date();
      //convert to timestamp
      const startDate = now.getTime();
      const endDate = new Date(date).getTime();
      //time remaining
      const timeRemaining = (endDate - startDate) /1000;
      console.log(timeRemaining);
   }
   countdown("Tue Jan 11 2022 17:48:19 GMT+0700 (Giờ Đông Dương)")
})