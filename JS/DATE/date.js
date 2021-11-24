//bai 40
const now = new Date();
   //build in object ( có sẵn trong js)
   console.log(now); 
   /**
    * =>Sat Aug 28 2021 15:03:16 GMT+0700 (Giờ Đông Dương)
    * bao gồm:
    *    time zone
    *    second
    *    minute
    *    hour
    *    year
    *    month
    *    day
    *    day of week*/ 
//bài 41
   //timestamp(tính ra kết quả là miliseconds) & epoch time(bắt đầu từ ngày 1 tháng 1 năm 1970 tính mili giây tới giờ)
   //unix time
      //timestamp tính ra kết quả là miliseconds để làm mấy cái ứng dụng countdown
   console.log(now.getTime()); 
   // console.log(new Date(0));

//bài 42 cách sử dụng newdate để tạo ra cái ngày để tính toán thứ gì đó
/** 4 cách sử dụng new Date()
 * new Date() : tính ra ngày giờ hiện tại
 * new Date(timestamp) : dựa vào timestamp để in ra ngày giờ
 * new Date(date string) :
 * new Date(year, month, day, hour, minute, second, milisecond)
 */

console.log(new Date(1630138680411));
console.log(new Date("Sat Aug 28 2021 15:14:50 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2021, 6,1, 23, 23,23,23)); // số 6 ra kết quả tháng 7, vì tháng trong js chạy từ number 0 = tháng 1 => 6 = tháng 7

//bài 43 : HÀM GET TRONG DATE
   /**
    * getFullYear()
    * getMonth () chạy từ 0-11 => tháng 1 = 0 ... tháng 12=11
    * getDate()
    * getDay(): lấy ra thứ trong tuần chạy từ 0 -6 => chủ nhật = 0 ... thứ bảy= 6
    * getHours()
    * getMinutes()
    * getMiliseconds()
    */
   const birthday = new Date(1999,10,26) //10 là tháng 11 tính theo quy luật get month
   //in ra năm
   console.log(birthday.getFullYear()); //1999
   //in ra tháng
   console.log(birthday.getMonth()); //10
   //in ra ngày của tháng
   console.log((birthday.getDate()));//26
   //in ra thứ
   console.log(birthday.getDay()); //5
   // ỉn ra giờ
   console.log(birthday.getHours())
   // ỉn ra phút
   console.log(birthday.getMinutes())
   // ỉn ra giây
   console.log(birthday.getMilliseconds())
   // in ra timestamp
   console.log(birthday.getTime());

//bài 44: CÁC HÀM SET TRONG DATE
console.log(`my birthday: ${birthday}`);
birthday.setFullYear(1992)
birthday.setMonth(7); // muốn chuyển qua tháng 8 
birthday.setDate(25)
//không có set day
console.log(`my birthday after update: ${birthday}`);

// bài 46 tìm hiểu các hàm khác trong date
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString()); //m/dd/yyyy
//set lại thành dd/m/yyyy
console.log(now.toLocaleDateString("vi-VI")); // mã của vn
console.log(now.toISOString());// chuẩn iso về ngày tháng năm
// bài tập
      //input: Tue Aug 31 2021 19:03:31 GMT+0700 (Indochina Time)
      //output : 31/08/2021

      const myTime =(new Date("Tue Aug 31 2021 19:03:31 GMT+0700 (Indochina Time)"));
      

      const myYear= myTime.getFullYear()
      const myDate= myTime.getDate();
      const myMonth= myTime.getMonth()+1
       
      const fixMonth= myMonth < 10 ?"0":""
      console.log(`${myDate}/${fixMonth}${myMonth}/${myYear}`);

//bài 47 settimeout VS setInterval(set khoảng thời gian)

const timer1 = setTimeout(function(){
   console.log("call be after 3 second")
},3000)
clearTimeout(timer1)

const timer = setInterval(function(){
   console.log("call me bitch");
},2000);
clearInterval(timer)

      

















