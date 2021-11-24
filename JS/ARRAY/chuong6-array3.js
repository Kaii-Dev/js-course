//by value -> giá trị thực sự lưu trong vùng bộ nhớ;
const num1=1;
const num2=1
console.log(num1===num2);//true

//by references -> nói tới vùng bộ nhớ
const arr1= [1,2];
const arr2 =[1,2];
console.log(arr1===arr2);

//JSON: javascript object notation
//JSON.stringify(value) -> convert giá trị sang dưới dạng json (để gửi lên db)
//JSON.parse -> chuyển về giá trị ban đầu lúc gửi

console.log(JSON.stringify([1,2,3])); //lúc này kết quả đang là string
console.log(JSON.parse("[1,2,3]")); // 

//so sánh 2 mảng áp dụng json
const arrStr1= JSON.stringify(arr1);
const arrStr2= JSON.stringify(arr2);
console.log(arrStr1===arrStr2);

//clone 2 mảng : tránh các hành động ảnh hưởng lên mảng ban đầu

const students = ["a","b","c","d","e"]
// students.pop();
console.log(students)

   //1. sử dụng phương thức slice();
      const sliceStudents = students.slice();
      console.log(sliceStudents);
   //2. spread operator[...array]
      const spreadStudent= [...students];
      console.log(spreadStudent);

//gộp mảng
const array1= [1,2]
const array2= [3,4]
const array3= [5,6]

   //1. concat
   console.log(array1.concat(array2, array3));
   //2.spread operator[...array]
   const mergeArray = [...array1,...array2,...array3]
   console.log(mergeArray);

//destructuring array
const toys = ['ball', 'arrow', 'fire','magic','water']

//const [indexName,indexName]
const [x,y,z]=toys;
console.log(x,y,z);

//rest parameters
const [ball,...rest]=toys
console.log(rest);
function demo(a,...rest){
   console.log(a,rest);
}
demo(1,2,3,4);


