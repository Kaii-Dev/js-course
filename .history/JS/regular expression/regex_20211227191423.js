// regular epression : biểu thức chính quy
   // 1. NHỮNG CÁCH KHAI BÁO VỚI REGEX
   const re1 = /hello/;
   const re2 = new RegExp("hello");
   //regex.test(value) -> true or false
   console.log(re1.test('hello world')); //ra true vi re1 co chua chu 'hello'

   //2. ANCHOR : ^ $
      // ^ : string bắt đầu với từ nào đó
      // $ : string kết thúc với từ nào đó
   /hi/.test