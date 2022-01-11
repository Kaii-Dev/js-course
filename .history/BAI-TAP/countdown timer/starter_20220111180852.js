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
      timeRemaining = timeRemaining % 86400; // lấy phần dư còn lại để tính giờ
      hours = parseInt(timeRemaining / 3600)
      timeRemaining = parseInt(timeRemaining % 3600); // lấy phần dư còn lại để tính phút
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = parseInt(timeRemaining % 60); // lấy phần dư còn lại để tính phút
      seconds = timeRemaining
      daysText.textContent = days;
      hoursText.textContent = hours;
      minutesText.textContent = minutes;
      secondsText.textContent = seconds;
   }
   setInterval(function() {
      countdown("360000")
   }, countdown);
})