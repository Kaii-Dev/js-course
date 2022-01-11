window.addEventListener("load", function(){
   const daysText = document.querySelector(".days");
   const hoursText = document.querySelector(".hours");
   const minutesText = document.querySelector(".minutes");
   const secondsText = document.querySelector(".seconds");
   function countdown(date){
      let days, hours, minutes, seconds ;
      const now = new Date();
      //convert to timestamp
      const startDate = now.getTime();
      const endDate = new Date(date).getTime();
      //time remaining
      let timeRemaining = parseInt((endDate - startDate) /1000);
         // 1 ngay 24h * 60p *60s = 86400
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400; // laas
      daysText.textContent = days
   }
   countdown("Tue Jan 15 2022 17:48:19 GMT+0700 (Giờ Đông Dương)")
})