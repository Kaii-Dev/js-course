console.log("-----array.slice------");

//tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];

//slice(): tạo mảng mới y hệt mảng banx đầu
const animals2 = animals.slice()
console.log(animals2);

//slice(start). start -> copy theo vị trí start index ở trong mảng
const animals3 = animals.slice(1);
console.log(animals3);

//slice(start, end) -> copy từ phần tử start tới phần tử end-1
const animals4 = animals.slice(1,3)
console.log(animals4);


console.log("-----array.SPLICE------");
// nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pet = ["dog", "cat", "bird", "dragon"];

//splice(start)
// const pet2 = pet.splice(2)
// console.log(pet2);

//splice(start, deleteCount) deletecount là số lượng phần tử muốn xóa hoặc thay thế
const pet3 = pet.splice(0,1)
console.log(pet); // từ index 0 xóa 1 phần tử => dog bị xóa

//splice(start, deleteCount, item1, item2, itemN) deletecount là số lượng phần tử muốn xóa hoặc thay thế

const pet4= pet.splice(0,1, "fish", "pig") // pet lúc này có kết quả từ dòng 28 là [cat, bird, dragon], sau đó xóa cat và fish , pig đc thêm vào
console.log(pet);



console.log("-----array.SORT------");  //sắp xếp các phần tử trong mảng theo chuẩn unicode 16

const random=[1,9999, 10,5, 09];

console.log(random.sort()) //[1, 10, 5, 9, 9999] : chuẩn unicode tính số phần tử đầu tiên của 1 số, trong số 10 có số 1 đứng trước số 5 => 10 đứng trước 5

//sort(function(a,b))
//function(callback)
const random2= random.sort(function(a,b){
   return (a>b) ?1:-1; // 1: đổi vị trí cho nhau , -1: không đổi vị trí cho nhau
});
//cách viết rút gọn
const random3 = random.sort((a,b)=> a >b ? 1:-1)
console.log(random2)
console.log(random3)

console.log("-----array.find-----");

//nó sẽ trả về phần tử tìm thấy đầu tiên tron mảng thỏa điều kiện nào đó
const numbers= [1,9999,100000,5,09]
//tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element, index)=> element > 10); // nếu không tìm thấy sẽ trả ra kết quả là undefined
console.log(findYourNumber);

console.log("-----array.findIndex-----"); //trả về vị trí
const findYourindex = numbers.findIndex((element) => element <9999) //nếu không tìm thấy sẽ trả ra -1
console.log(findYourindex);

console.log("-----array.MAP-----");// duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu

const listNumber = [1,2,3,4,5];
//  trả ra một mảng mới mà các số trong mảng cũ thực thi một thứ gì đó
const listDoubleNumber = listNumber.map(function(value, index, array){
   return value *2;
})
console.log(listDoubleNumber);

console.log("-----array.forEach-----"); // duyệt từng phần tử trong mảng nhưng khác với MAP là nó KHÔNG CÓ RETURN, MAP sẽ trả ra mảng mới dựa theo mảng ban đầu forEach thì không

const listNumberTriple = listNumber.forEach((value, index, array)=> {
   return value *3
})
console.log(listNumberTriple); // ra undefined tại vì nó không return được

console.log("-----array.filter-----");
//const listNumber = [1,2,3,4,5];

const greaterThanThree = listNumber.filter((item, i, a)=> item >3)
console.log(greaterThanThree);

console.log("-----array.some-----"); // trả về true khi thỏa 1 điều kiện trả về false khi không thỏa điều kiện nào cả
console.log("-----array.every-----"); // trả về true khi tất cả thỏa điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì trả về false

const someNumber = listNumber.some((value)=> value >3);
console.log(someNumber);

const everyNumber = listNumber.every((value) => value >3)
console.log(everyNumber);

console.log("-----array.reduce-----gom các phần trử trong mảng lại thành 1");
// reduce((a,b) ={}, initialize value);

const totalNumber = listNumber.reduce(function(perviousValue,currentValue){
   console.log(perviousValue, currentValue);
   return perviousValue + currentValue;
},0)

console.log(totalNumber);

console.log("-----array.flat(number)-----");
//trả 1 mảng duy nhất nếu như trong nó có nhiềU mảng

console.log("-----BÀI TẬP------");
//1. đảo ngược 1 chuỗi, ví dụ : "my name is evondev" => "evondev is name my"

// biến chuỗi thành mảng => split , biến mảng thành chuỗi là join

function stringReverse(str){
   if(!str) return null;
   const arrStr = str.split(" ") // chuyển chuỗi thành mảng
   
   const reverseStr= arrStr.reverse().join(" ") // chuyển mảng thành chuỗi
   
   return reverseStr
}
 console.log(stringReverse("my name is evondev"))

 //2.đảo ngược chuỗi + đảo ngược từng kí tự trong chuỗi

 function reverseWord(str){
    if(!str) return null;

    const arrStr = str.split(" ").map((item)=> item.split("").reverse().join(""));

    const result = arrStr.reverse().join(" ")
    console.log(result);
 }
 reverseWord("i love")

 //3. in hoa chữ cái đầu trong chữ ví dụ : "my name is khải" -> "My Name Is Khải"

 function captialize(word=""){
   if(word.length===0){
      console.log("hay nhap vao chuoi ki tu");
      return; 
   }
   let upper= word.toLowerCase().charAt(0).toUpperCase()
   let slice= word.slice(1).toLowerCase() // ở đây cần 
   return `${upper}${slice}`;
   
}
function capitalizeStr(str){
   if(!str) return null;
   const result = str.split(" ").map(item => captialize(item)).join(" ");
   console.log(result);
}
capitalizeStr("my name is khải")






