// 1.GLOBAL EXCUTION CONTEXT
// 2.FUNCTION EXCUTION CONTEXT
// 3.CALL STACK : QUẢN LÝ CHUYỂN ĐỘNG CỦA HỆ THỐNG

function add(a,b){
   return a+b;
}
function average(a,b){
   return (a+b)/2;
}
let result = average(10,20);  
/* TIẾN TRÌNH ()*
 * 3. ADD()
   2. AVERAGE()
   1. GLOBAL()
 */
/* KẾT QUẢ*
 * 1.AVERAGE()
   2.GLOBAL()
 */
