    //bài 17: number(value)
    console.log(Number("4.5"));
    console.log(Number("5"));
    console.log(Number("acb")); //NaN

    console.log(Number(undefined));//NaN
    console.log(Number(null));//0
    console.log(Number(NaN)); //NaN
    console.log(Number(""));//0

        //flasy value
            console.log(Number(true));//1
            console.log(Number(false));//0

    //bài 18:string(value) : chuyển toàn bộ qua string
    console.log(String(4.5)); //"4.5"
    console.log(String(null)); // "null"
    console.log(String(NaN)); // "NaN"
    console.log(String(false)); //"false"
    console.log(String(true)); //"false"
    

    // bài 19:boolean(value) ->true or false
    console.log(`Boolean of zeros: ${Boolean(0)}`); //false
    console.log(`Boolean of empty string: ${Boolean("")}`);//false
    console.log(`Boolean of null: ${Boolean(null)}`);//false
    console.log(`Boolean of undefined: ${Boolean(undefined)}`);//false
    console.log(`Boolean of NaN: ${Boolean(NaN)}`);//false
    console.log(`Boolean of text: ${Boolean("tuan")}`);

    //bài 20: type coercion: chuyển đổi dữ liệu từ kiểu này sang kiểu khác
    //+ - * /
        //phép cộng : CHUYỂN ĐỔI NUMBER THÀNH STRING
            console.log(10 + 10); //20
            console.log(10 + "10"); //"1010"
        //10 -> "10" + "10" = "1010"
            //console.log(String(10)+ "10")= "1010"

    // - * / : CHUYỂN ĐỔI STRING THÀNH NUMBER
            console.log("10"-10); //  Number("10")-10= 0
            console.log(null + ""); //null
            console.log(null + undefined); //NaN
            console.log("" - 1); // = -1: vì Number("") =0
            console.log(true - false);
            console.log(null + 10);
    
    // bài 21: toán tử so sánh cơ bản: >, < , >=, <=

            console.log(5 > 7); //false
            console.log(6>5); //true
            console.log(6>=6);
    
    // bài 22: toán tử so sánh cơ bản : && || ! (và, hoặc, phủ định)

            console.log(5 > 7 && 8 > 3); // false : vừa sai vừa đúng
            console.log(5 > 7 || 8 > 3); // true: false hoặc true => true
            const amIwrong = false;
            console.log(!amIwrong); // true
    //boolean && 
        //false && true -> false
        //false && false -> false
        //true && true -> true
    //boolean ||
        //false || true -> true
        //false || false -> false
        //true || true -> true
    
    //bài 23 : so sánh == và  === (loose equality: ss theo giá trị và strict equality: so sánh theo kiểu)
         // ==: sẽ chuyển các giá trị thành Number(value) rồi so sánh các giá trị đÓ
    console.log("== vs ===");
    console.log(10 == "10"); // vì 10 bị convert sang string "10"=="10" ->true
    console.log(true == 1); //true
    console.log(1 == "01"); //Number("01") -> 1 == 1 =>true
    console.log(null == 1) // false
    console.log(null == ""); //false vì giá trị number của string rỗng = 0 mà null lại không có giá trị
        // === thì sẽ so sánh kiểu dữ liệu
    console.log(10 ==="10"); // check theo kiểu ->false
    console.log(10 !== "10");// true => vì !== có nghĩa là khác giá trị mà string khác với number nên ra false
        //chú ý
    console.log(true == "true"); // vì number(true) = 1, number "string" =string => false