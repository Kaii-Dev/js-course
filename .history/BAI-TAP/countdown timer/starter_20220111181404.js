window.addEventListener("load", function(){
   const daysText = document.querySelector(".days");
   const hoursText = document.querySelector(".hours");
   const minutesText = document.querySelector(".minutes");
   const secondsText = document.querySelector(".seconds");
   function countdown(date){
      const endDate = new Date(date).getTime();
      let days, hours, minutes, seconds ;
      function calculate(){

      }
      
   }
   setInterval(function() {
      countdown("Tue Jan 11 2022 19:09:07 GMT+0700 (Giờ Đông Dương)")
   }, countdown);
})