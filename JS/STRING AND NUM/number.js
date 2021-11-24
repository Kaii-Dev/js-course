    // bài 11: tìm hiểu kiểu dữ liệu number

console.log(7+8);

console.log(typeof 12);

const number1="5"; // 5 đang là chuỗi vì để trong ngoặc
const number2="4.5";
console.log(typeof (number1));
//ép kiểu
console.log( parseInt(number1));// 5
console.log( parseFloat(number2));//4.5

const number3= -10;
//math.abs(value): giá trị tuyệt đối
console.log(Math.abs(number3));
//Math.floor(value) ->làm tròn xuống 
console.log(Math.floor(4.5));
//Math.ceil(value) -> làm tròn lên
console.log(Math.ceil(4.6))
//Math.round(value) ->làm tròn gần nhất
console.log(Math.round(4.5));
//toFixed(number) ví dụ: 0.333333  -> 0.3 KHI XÀI TOFIXED THÌ VALUE SẼ BỊ BIẾN THÀNH CHUỖI
console.log((1/3).toFixed(1));
//Math.random(value) -> chạy ra số random từ 0 -> value-1
console.log(Math.ceil(Math.random()*12)); // chạy từ 0-11
//Math.max(value) ->trả ra con số lớn nhất
console.log(Math.max(1,3,4,7));
//Math.min(value) ->trả ra con số lớn nhất
console.log(Math.min(1,3,4,7));
//math.pow(số nguyên, số mũ) -> 3^2
console.log(Math.pow(3,2)); 

    //bài 12: tìm hiểu kiểu dữ liệu number phần 2
        //isNaN  VS  Number.isNaN
            
        //NaN -> not an number: có được bằng cách :Lấy số 0 chia cho số 0,Lấy vô cùng (infinity) chia cho vô cùng (infinity),Nhân vô cùng (infinity) với số 0, Bất kỳ phép tính toán nào trong đó NaN là một toán hạng, Chuyển đổi một xâu non-numeric hoặc undefined về dạng number. 
            //NaN là các giá trị số không xác định nhưng nó vẫn là số nên thuộc kiểu number       
            console.log(isNaN("this is a string")); //->true. isnan là hàm check
            console.log(isNaN("134324234"));//flase
            //Number.isNaN -> Phương thức Number.isNaN() sẽ kiểm tra giá trị truyền vào có phải là một giá trị NaN(NOT-A-NUMBER) hay không.
            console.log(Number.isNaN("134324234")); // flase, cụm isNaN("134324234") đã là false nhưng có hàm check number trước đó nên nguyên cái log này là flase
            console.log(Number.isNaN(NaN));
            
