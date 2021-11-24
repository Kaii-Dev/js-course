
 //bài 1: cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev","", undefined, "javascript", [1,2,3]]. viet chuogn trinh loai bo cac gia tri falsy ra khoi mang khi giu lai gia trij truethy. goi y gia tri falsy la 0, null, undefined, false, "", NaN
 
 const array= [1,1000, false, null, "evondev","", undefined, "javascript", [1,2,3], NaN];

 const filterFalsy = array.filter(item => Boolean(item))
 console.log(filterFalsy);


 //bài 2: cho 1 mảng phức tạp [[1,2,3], [false, null], [1,5,6], ["javascript"], [888,666,[90]]]. và kết quả mong muống là [1,2,3,false, null, null, 1,5,6, "javascript", 888,666,90]

 const complicatedArr = [[1,2,3, [false, null]], [1,5,6], ["javascript"], [888,666,[90]]];

const result = complicatedArr.flat(2);
console.log(result);


   // 3. đảo ngược số nguyên. ví dụ 1234 -> 4321

   //Math.sign (123) ->1 còn (-123)-> -1



function reverseNum(oldArr){
   const value = parseInt(oldArr.toString().split("").reverse().join("")) *Math.sign(oldArr) // nhân để lấy dấu dương hoặc âm
   console.log(value)
}
console.log(reverseNum(-1234));


//bài 4: viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 tới số nguyên đó rồi kiểm tra nếu số nguyên chia hết cho 2 thì ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", chia hết cho 2 và 3 thì in ra "FizzBuzz"

function fizzBuzz(number){
   if(Number.isInteger(number)){
      for(i= 1; i<= number; i++){
         if (number%3== 0 && number%2==0){
            console.log('FizzBuzz');
         }
         else if(number%2 == 0){
            console.log('Fizz');
         }
         else if(number%3==0){
            console.log('Buzz');
         }
      }
   }
}
fizzBuzz(6)

//bai 5: cho 1 chuỗi bất kỳ, đếm số lượng kí tự 'vowels' có trong chuỗi, vowels là các kí tự u e o a i
// ví dụ "evondev" -> 3

function countVowels(str) {
   let vowelCounts = 0;
   const characters = 'ueoai'
   var string = str.toString().toLowerCase();
   for(let c of string){
      if(characters.includes(c)) vowelCounts = vowelCounts + 1;
   }
   return vowelCounts;
 }

 console.log(countVowels('EVONDEV'));


// bài 6: cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. viết một function trả về một mảng mới với các giá trị là duy nhất

function unique(arr){
   let result = [];
   if(!Array.isArray(arr)) return result // kiểm tra có phải là mảng không

   for (var i = 0; i <arr.length; i ++){
      if (!result.includes(arr[i])){ // nếu chưa có chứa cái arr[i] ( giá trị) thì mới push vào còn chứa rồi thì thôi
          result.push(arr[i]);  
      }
   }
   return result;
}
console.log(unique([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]));


// bài 7: viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào. ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]

function splitArr(array1, number){
   let result = []; 
   let index = 0;
  while (index < array1.length){
     result.push(array1.slice(index, number + index)); // number + index là vì nếu không có thì nó sẽ không CẮT tiếp vì sai logic
     index = index + number;
  }
  console.log(result);
  
}
splitArr([1,2,3,4,5,6], 2);

// trả về 1 mảng arrLast[] có phần tử là các giá trị giống nhau của arr1 và arr2

function findEqualValues(array1, array2) {

   var myArray = []
       for (var i of array1  ) {
           for( var j of array2) {
               if (i === j ) {
                myArray.push(i)
               }
           }
       }
   return myArray
   }
   