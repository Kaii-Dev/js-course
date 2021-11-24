// var array1 = [1,2,3,4];
// var array2 = [5,6,0,8];
// var sum= array1.map(function(number, index){
//    return number+ array2[index]
// })

// console.log(sum);
// 2 cách tạo mảng
const students = ["khải", "an", "tome", "an"];
const students2 = new Array(); //array constructor 

// index: vị trí của phần tử trong mảng và nó bắt đầu từ 0
//lenght: số lượng phần tử, đếm từ 1

//truy xuất trong mảng
console.log(students[0]);

//lấy phần tử cuối cùng trong mảng = độ dài của mảng - 1
console.log(students[students.length - 1]);

/**
 * PHƯƠNG THỨC HAY DÙNG TRONG MẢNG
 *    1. Lenght
 *    2. Reverse : đảo ngược giá trị trong mảng
 *    3. Join : nối các phần tử trong mảng thành chuỗi
 *    4. includes : kiểm tra mảng đó có chứa phần tử nào đó không
 *    5. indexOf : trả về vị trí của phần tử tìm thấy đầu tiên
 *    6. lastIndexOf : trả về vị trí cuẩ phần tử tìm thấy cuối cùng
 *    7. push : thêm phần tử vào cuối mảng
 *    8. pop: xóa phần tử cuối cùng trong mảng
 *    9. shift: xóa phần tử đầu tiên trong mảng
 *    10. unshift : thêm phần tử vào đầu mảng
 */

// console.log(students.reverse());
console.log(students.join());
console.log(students.includes("lệ")) // ->false
console.log(students.includes("khải")) //true


console.log(students.indexOf("an"));
console.log(students.lastIndexOf("an"));

// thêm phần tử
console.log(students.push("javascript"));
console.log(students.unshift("frontend"))
console.log(students);

// xóa phần tử
students.pop() // xóa phần tủ cuối javascript
console.log(students);

students.shift() // xóa phần tử đầu : frontend
console.log(students);




