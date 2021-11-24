const fruit = "lemon";
// if (fruit==="apple"){
//     console.log("you like to eat apple");
// }
// if(fruit ==="lemon"){
//     console.log("you like to eat lemon");
// }
// if(fruit ==="watermelon"){
//     console.log("you like to eat watermelon");
// }

switch (fruit) {
    case "apple":
            console.log("you like to eat apple");
        break;
    case  "watermelon":
    case "lemon":
            console.log("you like to eat lemon and watermelon");
        break;    
        
    default:
        console.log("you like to eat shit");
        break;
}

//bài 28 ternary operator: hàm if else rút gọn

    //cau truc  => condition ?  true : false
    const yourAge = 18;
    let message = yourAge >= 18 ?"you are adult" : "you are child";
    console.log(message);

    let message3 = yourAge >=18 ? "you are adult": yourAge<=10 ? "you are child" : "you are young boy";
    console.log(message3);