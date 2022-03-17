//JSON - javascript object notation: là một định dạng dữ liệu (CHUỖI), thể hiện kiểu dữ liệu number, string, boolean, null, arr, obj
// stringtify (từ js sang json) / parse (từ json sang js)
//trong json dùng cặp nháy kép để ngăn cách các key dạng chuỗi, ngăn cách giữa các phần tử thì sử dụng dấu ","

const json1 = '["javascript", "php"]'; //json dạng mảng
const object ='{"name": "khai le" , "age" : 18}' //json dạng object

// const a = '"javascript"';
console.log(JSON.parse(json1));
console.log(JSON.parse(object));