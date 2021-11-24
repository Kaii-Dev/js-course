
            // Hàm forEach---------------------
// Duyệt qua tất cả các phần tử trong mảng



            // Hàm every----------------------
// kiểm tra tất cả các phần tử phải thỏa mãn một điều kiện gì đó,
//  trả về TRUE nếu đúng hết,
//  Còn nếu chỉ 1 cái sai thì sẽ trả về True


            // Hàm some------------------------
// Lọc qua các phần tử trong mảng,
// chỉ cần có 1 phần tử đúng là True
// Kết thúc duyệt ngay khi gặp True,
// Còn chưa được True thì duyệt cho đến hết mảng


            // Hàm Find------------------------
// Chỉ tìm một đối tượng trong mảng
// lọc từ TRÊN XUỐNG DƯỚI
// khi lọc đến đúng đối tượng cần tìm thì 
// ngừng không tìm nữa, các đối tượng bên dưới 
// sẽ không được tìm đến


            // Hàm filter------------------------
// giống thao tác bên hàm find 
// nhưng khác ở chỗ là nó sẽ tìm hết tất cả
// các đối tượng có trong mảng cho tới khi 
// không còn đối tương nào giống với điều kiện cần tìm
// đưa ra một dnh sách



var courses= [
   {
      id:1,
      name: 'javascript',
      coin:250
   },
   {
      id : 2,
      name: 'html, css',
      coin:0
   },
   {
      id: 3,
      name: 'ruby',
      coin: 0
   },
   {
      id : 4,
      name: 'PHP',
      coin: 400
   },
   {
      id : 5,
      name: 'reactJS',
      coin: 500
   }
];
      console.log('---forEach---')
courses.forEach(function(course, index){
   console.log(course, index);
});

      console.log('---every : trả về boolean---')

var isFree = courses.every(function(course, index){
   return course.coin === 0;
});

console.log(isFree); // => false vì dòng số 47 điều kiện return là coin phải = 0 mà trong mảng thì có object có coin > 0 nên là ra false

      console.log('---some : trả về boolean---')

var isFree2 = courses.some(function(course, index){
   return course.coin === 0;
});
console.log(isFree2);

      console.log('---find : trả về MỘT kết quả tìm kiếm---')

var resultName= courses.find(function(course, index){
   return course.name =='javascript'
});
console.log(resultName);

      console.log('---filter : trả về TẤT CẢ PHẦN TỬ THỎA MÃN kết quả tìm kiếm---')

var resultCoin= courses.filter(function(course, index){
      return course.coin > 0;
});
console.log(resultCoin);

const numbers = [1,-2,3]

const check = numbers.every(function(value, index){
   return value > 0;
})
console.log(check);



// // Làm bài tập tại đây
// function findStringsInArrayByKeyword(keyword, strings) {
//    var output = []
//    for(var i in strings) {
//        if(strings[i].includes(keyword)) {
//            output.push(strings[i])
//        }
//    }
//    return output
   

// }



