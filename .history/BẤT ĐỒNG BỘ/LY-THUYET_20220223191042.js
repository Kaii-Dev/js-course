//JS MẶC ĐỊNH LÀ NGÔN NGỮ ĐỒNG BỘ, CHẠY 1 THỨ TRONG 1 LẦN, NẾU CÓ 2 THỨ THÌ SỬ DỤNG BẤT ĐỒNG BỘ

// 1.GLOBAL EXCUTION CONTEXT
// 2.FUNCTION EXCUTION CONTEXT
// 3.CALL STACK : QUẢN LÝ CHUYỂN ĐỘNG CỦA HỆ THỐNG bắt đầu từ main()

function add(a,b){
   return a+b;
}
function average(a,b){
   return (a+b)/2;
}
let result = average(10,20);  
/* TIẾN TRÌNH (BẮT ĐẦU TỪ GLOBAL LÊN )*
 * 3. ADD()
   2. AVERAGE()
   1. GLOBAL()
 */
/* KẾT QUẢ*
 * 1.AVERAGE()
   2.GLOBAL()
 */
