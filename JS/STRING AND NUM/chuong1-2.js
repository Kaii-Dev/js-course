console.log("hello world");

//bai 5: khai bao bien- delcare variable

    //const: hang so khong he thay doi 
    const number= 100;
    console.log(number);

    // let: co the thay doi
    let othernumber = 200;
    othernumber = "hello";
    console.log(othernumber);

//bai 6: hoisting: hoisting là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code.
        //var se bi hoisting
    
//bai 7+8: string: double quotes, single quotes, backsticks (dau nhay xeo')
    const name= "khai";
    // console.log(name);
    // console.log(typeof name);
    const newstring = "hello my name is khai and im dev";
    const newstring2= "hello my name is "+name+ " and im dev";
    // console.log(newstring2);
    //${variable}
    const newstring3 = `my namne is ${name}`;
    console.log(newstring3);

//bài 9: index và lenght của string
    //leght
console.log(newstring2.length); // đếm từ 0 => độ dài = 32
    //index : vị trí của từng kí tự trong chuỗi bao gồm khoảng trắng

// bài 10: các phương thức trong string
    
const myStr= "   Frontend Developer D D D D   ";
console.log(myStr.split(" "));

console.log(myStr.toLowerCase());

console.log(myStr.toUpperCase());

console.log(myStr.startsWith("frontend")); //kiểm tra true false, trong js có phân biệt viết hoa viết thường

console.log(myStr.endsWith("Developer"));

console.log(myStr.includes("end"));

console.log(myStr.indexOf("D")); // kiếm ra kí tự đầu tiên từ trái qua

console.log(myStr.lastIndexOf("D")); //kiếm ra kí tự đầu tiên từ phải qua

console.log(myStr.replace("Developer", "Designer"));

console.log(myStr.replace(/D/g, "Designer")); // thay tất cả chữ D thành design

console.log(myStr.repeat(2));

console.log(myStr.slice(0,8)); //lấy giá trị start và end của index 

console.log(myStr.slice(-5)); // =per D : đảo ngược chiều lấy thành từ phải -> trái

console.log(myStr.trim()); //loại bỏ khoảng trống trái và phải

console.log(myStr.trimStart()); //loại bỏ khoảng trống trái 

console.log(myStr.trimEnd()); //loại bỏ khoảng trống phải

const myStr2="Frontend";

console.log(myStr2.charAt("2"));
console.log(myStr2.length);
    //substr: lấy ra một phần của chuỗi
    //substr (index, lenght) -> index: vị trí, lenght : số lượng kí tự muốn lấy
        console.log(myStr2.substr(1,5)); // = ronte

    //substring: lấy ra các kí tự của chuỗi
    //substring (start index, end index) ->trả về hiệu của start index và end index
        console.log(myStr2.substring(3,7  )); // = ront : 

//bài 10: sử dụng nhiều phương thức của string cùng lúc

const myStr3= "   Frontend Developer D   ";
        //yêu cầu: loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ "Developer D" thành chữ  "Developer and Designer"
        console.log(myStr3.trim().replace("Developer D","Developer and Designer").toUpperCase().repeat(2));

//bài 11: