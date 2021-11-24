//bai 1: viet ham so sanh 2 so a, tim ra so lon hon
//cach 1
function sosanh(a, b) {
   if(a>b){
      return a;
   }else{
      return b;
   }
   console.log(sosanh);
}
const ketqua = sosanh(10,3);
console.log(ketqua);

//cach 2
function compare(a =0, b=0){
   if(typeof a !== "number", typeof b!== "number"){
      console.log("hay nhap dung kieu du lieu");
      return;
   }
   return Math.max(a,b);

}
console.log(compare(10,100));

//bai 2: in hoa chu cai dau trong 1 chữ

function captialize(word=""){
   if(word.length===0){
      console.log("hay nhap vao chuoi ki tu");
      return; 
   }
   let upper= word.toLowerCase().charAt(0).toUpperCase()
   let slice= word.slice(1).toLowerCase() // ở đây cần phải lower case tại khi chuỗi truyền vào sau chuỗi mới sau khi slice chưa viết thường => kết quả sau cùng toànin hoa
   let newString= `${upper}${slice}`
   console.log(newString);
   return newString;
   
}
const result = captialize("KHẢI")

//bài 3: viết hàm có sử dụng callback(function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
 
function useCallback(a, b, callback){
   let max = compare(a, b);
   callback(max); 
   //vì hàm này không có return nên sẽ kèm thêm giá trị undefined
}
function printMax(number){
   console.log("max number is "+ number);
}
console.log(useCallback(6,10, printMax ));

// dòng 45 truyền vào paramêtrr cho callback() .dòng 51 lại gán parameter mới cho function usecallback() là printmax() => printmax lúc này = calllback() => printMax(number) đại diện cho callback(max)


