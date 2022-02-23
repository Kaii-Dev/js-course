const numbers =[1,2,3,4,5,6,7,8,9,10];

/**
 * 1. for : lặp với điều kiện đúng
 * 2. for/in : lặp qua key của đối tượng
 * 3. for/of : lặp qua value của đối tượng
 * 4. while : lặp khi điều kiện đúng
 * 5. do/while : lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */
// for(let i= 0; i< numbers.length; i++){
//    // nếu giá trị là 8 thì dừng vòng lặp
//    if(numbers[i]===8){
//       break;
//    }
// console.log(`the value is ${numbers[i]}`);

// }
// console.log("----continue-----");

// for(let i= 0; i< numbers.length; i++){
//    // nếu giá trị là 8 thì bỏ qua giá trị đó
//    if(numbers[i]===8){
//       continue;
//    }
// console.log(`the value is ${numbers[i]}`);

// }

// lấy vị trí cuối cùng của mảng
// for (let i = numbers.length -1 ; i >=0; i--){
//    console.log(`the value ${numbers[i]}`);
// }

// vòng lặp trong vòng lặp (nested loop)
console.log("--------nested loop--------")

var arr = [
   [1,2],
   [3,4],
   [5,6]
];

for(var i= 0; i< arr.length; i++){
   for(var j = 0; j < arr[i].length; j++){
      console.log(arr[i][j]);
   }
}


console.log("--------for/in-------- chuyên làm với object");
//vi du 1: voi object
var myInfo = {
   name: 'khai',
   age: 18,
   addrees: 'cantho'
};

for(var key in myInfo){
   console.log(myInfo[key]);
}

//vi du 2: voi mang

var languages = [
   'PHP',
   'JS',
   'ruby',
]
for(var key in languages){
   console.log(languages[key]);
}

//vi du 3: voi chuoi

var myString = 'Javascript';

for(var key in myString){
   console.log(myString[key])
}

console.log("--------for/of--------"); // lấy ra phần tử của 1 mảng hoặc từng chữ cái của 1 chuỗi
//vi du 1 voi mãng
for(var value of languages){
   console.log(value)
}

let a= [];
for (var value of numbers){
   value +=10;
   a.push(value);
}
console.log(a);

//ví dụ 2: với object ( không lấy ra được nếu muốn lấy được phải biến tấu) => trả về một mảng

for(var value of Object.values(myInfo)){
   console.log(value);
}
console.log("--------BÀI TẬP--------");
         //BÀI TẬP:

            //1. sao chép mảng dùng vòng lặp for
            let copyArr= [] //global scope
            for(let i = 0; i<numbers.length; i++ ){
               copyArr.push([numbers[i]]); // đẩy phần tử vào
            }
            console.log(copyArr);
            
            //2. đảo ngược từ
            const str = 'i love';
            let newStr= '';
            for (let i = str.length -1 ; i>=0; i--){
               newStr = newStr + str[i];
            }
            console.log(newStr);

/**
 * 
 * while (condition){ check điều kiện trước rồi mới xử lý
            body code
* do while : xử lý trước mới check điều kiện
}
 */
 console.log("--------while--------");
let number = 1;

while (number < 3){
   console.log("number is"+ " " +number);
   //điều kiện dừng
   number = number + 1;
   //number +=1;
   //number ++;
}
console.log("--------do/while--------"); // xử lý đoạn code trong DO trước (dù sai) rồi mới kiểm tra điều kiện trước
let number2= 1;

do{
   console.log('number2 is '+ number2);
   number2++;
}while(number2 < 10 );


console.log("--------break và countinue--------")

for (var i = 0; i <10; i++){
   console.log(i);
   if(i >=5){
      break;
   }
}
// lấy số số chắn
for( var j = 0; j<10; j++){
   if(j%2!==0){
      continue;
   }
   console.log(j);
}

const formValue = [
   {  field: 'name',
      value: 'Sơn Đặng'
   },

   {  field: 'age',
      value: 18 
   },

   {  field: 'address',
      value: 'Hà Nội' 
   }
   
]


