window.addEventListener("load", function(){
   const daysText = document.querySelector(".days");
   const hoursText = document.querySelector(".hours");
   const minutesText = document.querySelector(".minutes");
   const secondsText = document.querySelector(".seconds");
   function countdown(date){
      const endDate = new Date(date).getTime();
      let days, hours, minutes, seconds ;
      if(isNaN(endDate)){
         return;
      }
      setInterval(calculate, 1000);
      function calculate(){
      const now = new Date();
      //convert to timestamp
      const startDate = now.getTime();
      //time remaining
      let timeRemaining = parseInt((endDate - startDate) /1000);
         // 1 ngay 24h * 60p *60s = 86400
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400; // lấy phần dư còn lại để tính giờ
      hours = parseInt(timeRemaining / 3600)
      timeRemaining = parseInt(timeRemaining % 3600); // lấy phần dư còn lại để tính phút
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = parseInt(timeRemaining % 60); // lấy phần dư còn lại để tính phút
      seconds = timeRemaining
      daysText.textContent = `0${days}`.slice(-2);
      hoursText.textContent = `0${hours}`.slice(-2);
      minutesText.textContent = `0${minutes}`.slice(-2);
      secondsText.textContent = `0${seconds}`.slice(-2);
      }
      
   }
   countdown()
})