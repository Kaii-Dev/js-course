//FUNCTION (hàm): thực hiện chức năng gồm nhiều thứ và chia nhỏ ra để sử dụng ở nhiều nơi   
               //+ function declaration : hàm đc khai báo
               // anonymous function (function expression): vô danh

            // cách 1 biến được tìm kiếm: đầu tiên sẽ kiểm tra phạm vi của nó nếu không có lại trỏ ra phạm vi cha của nó


//khai báo function
//cú pháp (syntax): function functionName(Parameters, Parameters){your code} parameter(tham số) không bắt buộc

   //viết hàm tính tổng 2 số a và b
function sum(a,b){
   // console.log("is it working?");
    const total = a+b;
    //return
   return total;
   //không có return thì kết quả trả về là undefined
}
//sum(): invoke function :gọi hàm
console.log(sum(5,10));
console.log(sum(5));// ra NaN vì chưa có giá trị b => undefined => NaN => 5+NaN = NaN

//function sum(parameter =defaultValue){} nên đặt giá trị default để tránh bị NaN

//invoke function sum(arguments: đối số)

//bài 30 

   //1.lưu function vào 1 biến số rồi gọi sau này
   function add(a=0,b=0){
      console.log(a+b);
      return a+b;
   }
   const sum2= add; // gán function cho sum2 nhưng chưa được gọi nhằm mục đÍch tái sử dụng
   sum2(300, 400)
   //2.tham số là function
      
      //tính trung bình của a và b
         function trungbinh(x,y,fn){
               const total = fn(x,y); //fn(x,y) là hàm add được tạo ở trên thay thế cho cú pháp a+b
               return total/2;
         }
         let result = trungbinh(200,300,sum2) // sum2 là đại diện cho cái fn trong hàm trung bình mà sum 2 lại bằng function add()
         console.log(`result ${result}`);

//bài 31 : anonymous function (function expression) => không bị hoisting (không tự động đưa fucntion logname() lên trên cùng )
const logName = function(){
   console.log("your name")
};
logName();
//iife -> immediately invoked function excution : fucntion chạy ngay lập tức

(function (){
   console.log("this is iife fucntion");
})();

//bài 32 SCOPE
   //global scope, function scope
   let myname ="khai le"; //global scope: nằm ngoài fucntion
   function logyouname(){
      let name2 = myname; //function scope : nằm trong function nhưng vẫn có thể truy cập global scope
      console.log(name2);
   }
   logyouname()

//bài 33 BLOKC SCOPE = function scope
if (2>1){
      //block scope : một khối nằm trong {} và chỉ được gọi và sử dụng trong đó nếu ra ngoài thì sẽ lỗi
      const message ="hello khai";
      //global scope: var
      //hoisted
     var message2 = "hello an"; // var không phải block scope mà global scope
   }
   // alert(message); // vì message là biến trong block scope nên đem ra ngoài xài không được
   // alert(message2);
   
   //bài 33 CLOSURE (//lexical scope:)
   
   //CLOSURE (bao đóng): là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
    

    //ví dụ 2 về lexical
    let aNewName= "khai le dep trai"; //global scope
    function sayHi(){
       let message5 = "hi"; //block scope
       console.log(`${message5} ${aNewName}`);
    }
    sayHi();
         function sayHi2(){ //parent function
               let message= "hi";
               function sayhi(){ //child function
                  console.log(message);
               }
               return sayhi;
         }
         let hello = sayHi2();
         hello();

   //VÍ DỤ 2
         function sayhello3(message){
            return function hiyourname(name){
               console.log(`${message} ${name}`);
            }
         }
         let welcome = sayhello3("welcome to javascript")
         welcome("closure"); // => welcome to js closure

   // VÍ DỤ 3
         function createCounter(){
            let counter = 0;
            function increase(){
               return ++counter;
            }
            return increase
         }
         const counter1= createCounter() // hàm counter1 bản chất lúc này là increase được trả ra ngoài từ createcounter(), khi dòng này được gọi thì hàm createcounter sẽ được thực thi và mỗi lần thực thi lại sinh ra một scope riêng của nó
         console.log(counter1()); // =>1 
         console.log(counter1()); // =>2 được giá trị trên vì nó đang truy cập vào pham vi duy nhất là createcounter() được khởi tạo ở dòng const counter1= createCounter() mà trước đó đã tăng biến counter lên 1 => trả về ++
         console.log(counter1()); // =>3
         console.log(counter1()); // =>4

         // ứng dụng debug
         function createLogger(namespace){
            function logger(message6){
               console.log(`[${namespace}] ${message6}`);
            }
            return logger;
         }

         const thongbao = createLogger("debug")
         thongbao("email đã được gửi")
         thongbao("email bị hủy gửi")
         thongbao("email chưa đÚng yêu cầu gửi")

         // ứng dụng lưu storage
         function createStorage(key){
            const store = JSON.parse(localStorage.getItem(key)) ?? {}
            const save=()=>{
               localStorage.setItem(key, JSON.stringify(store))
            }
            const storage = {       // cụm object
                  get(key){
                     return store[key];
                  },
                  Set(key, value){
                     store [key] =value
                     save()
                  },
                  remove(key){
                     delete store[key];
                     save();
                  }
            }
            return storage // có chứa 3 function là get set remove
         }
         
         const ProfileSetting = createStorage('profile_setting')
         console.log(ProfileSetting.Set('fullname')); // dòng này sửa set thành get và ẩn dòng ProfileSetting.Set('fullname','khải lê'); thì vẫn console được khải lê vì nó đã lưu trong storage rồi
         ProfileSetting.Set('fullname','khải lê'); // coi kết quả trong application/local storage

         // bài 39: arrow function: anonymous function
            // normal function 
            const square = function(x){
               return x*x;
            }
            square(5);
            //arrow function
            const square2=(x) =>{
               return x*x;
            }
               // viết rút gọn khi return trên 1 hàng
               const square3=(x)=>x*x;
               /**
                * arrow function khi xử lý nhiều dòng
                * const square =() =>{
                *    code cần xử lý
                *    return;
                * }
                             *  */ 

//CALLBACK () : LÀ HÀM ĐƯỢC TRUYỀN QUA ĐỐI SỐ + KHI GỌI HÀM KHÁC

function myFn(param){
   param('học lập trình');
}

function myCallback(value){
   console.log('value: ', value)
}

myFn(myCallback);

            


         
        
         
         


   
   

         

         
      
   