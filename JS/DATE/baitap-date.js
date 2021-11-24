/**-BÀI TẬP
 * 1. VIẾT CHƯƠNG TRÌNH NHẬP VÀO NĂM SINH VÀ IN RA SỐ TUỔI
 * 2. VIẾT CHƯƠNG TRÌNH ĐẾM NGƯỢC THỜI GIAN CHẠY THEO TỪNG GIÂY, DỰA VÀO THỜI GIAN ĐẦU VÀO. 
 * 3 VIẾT CHƯƠNG TRÌNH CÓ TÊN LÀ TIMESINCE,, ĐẦU VÀO LÀ THỜIG IAN VÀ TÍNH THỜIG GIAN ĐẦU VÀO SO VỚI TGIAN HIỆN TẠI : ví dụ 3 ngày trước, 2 phút trước...
 * 
 *
 * -*/


//BÀI LÀM

//bài 1
const now = new Date()

function calculateAge (inputYear){
    const currentYear = now.getFullYear()
   return currentYear- inputYear;
}

const age = calculateAge(1999)
console.log(`tuổi của bạn là ${age}`);

//bài 2


// function countDown(setTime){
//    setTimeout(function(){ alert("đã hết giờ làm bài"); }, setTime*60*1000); 
// }

// const run = countDown()
// console.log(run);

//bài 3

function timeSince(date){
   //current Time
   const now = new Date();
   const yourDate = new Date(date);
   const seconds = Math.floor((now.getTime() - yourDate.getTime())/1000); // get time lay ra timestamp dua vao epoctime
   
   let timer = seconds / 31536000;
   if(timer >1){
      console.log(`${Math.floor(timer)} năm trước`);
   }
   timer = seconds /2678400
   if(timer >1){
      console.log(`${Math.floor(timer)} tháng trước`);
   }
   timer = seconds /604800
   if(timer >1){
      console.log(`${Math.floor(timer)} tuần trước`);
   }
   timer = seconds /86400
   if(timer >1){
      console.log(`${Math.floor(timer)} ngày trước`);
   }
   timer = seconds /3600
   if(timer >1){
      console.log(`${Math.floor(timer)} giờ trước`);
   }
   timer = seconds /60
   if(timer >1){
      console.log(`${Math.floor(timer)} phút trước`);
   }

   timer = seconds 
   if(timer >1){
      console.log(`${Math.floor(timer)} giây trước`);
   }

}

//1 năm -> giây = 31536000
//1 tháng-> giây = 2678400
//1 tuần-> giây = 604800
//1 ngày-> giây =86400
//1 giờ-> giây = 3600
//1 phút-> giây = 60
timeSince("Tue Sep 07 2021 20:17:46 GMT+0700 (Giờ Đông Dương)")

