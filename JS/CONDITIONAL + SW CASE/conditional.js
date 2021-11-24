// câu điều kiện

    //if(condition){
        // your code hear; 
    //} => phải trả về giá trị đúng

const isRich = false;
const myMoney = 1000000000;
    if(isRich){
        console.log("i will buy a car");
    }else if(myMoney >1000){
        console.log("i will give you");
    }

//Bài 25:
    //prompt, confirm, alert
        // alert("your web has been hacked");// trả về thông báo

        //prompt: trả về form để nhập giá trị
            // const name= prompt("vui lòng nhập vào tên của bạn", "");
            // console.log(name);

        //confirm: xác nhận boolean đúng sai
            // const isYourMoney = confirm("đây có phải là tiền của bạn hay không?")
        
    //switch case

    //bài tập1: nhập vào số tuổi và nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp và ngược lại

        // const yourAge = prompt("vui long nhap vao so tuoi cua ban","");
        // console.log(typeof yourAge);
        // let message = "";
        // if(Number(yourAge)>=18){
        //     message="bạn có thể coi phim";
        // }else{
        //     message = "bạn chưa đủ tuổi coi phim";
        // }
        // alert(message);

    //bài 2: cho 2 số a và b tìm ra số lớn hơn
        // const a=5;
        // const b=5;
        // if(a>b){
        //     alert(`số lớn hơn là số ${a}`);
        // }else if(a<b){
        //     alert(`số lớn hơn là số ${b}`);
        // }else{
        //     alert(`không có số nào lớn hơn số nào cả`)
        // }