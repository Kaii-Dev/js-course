// regular epression : biểu thức chính quy
   // 1. NHỮNG CÁCH KHAI BÁO VỚI REGEX
   const re1 = /hello/;
   const re2 = new RegExp("hello");
   //regex.test(value) -> true or false
   console.log(re1.test('hello world')); //ra true vi re1 co chua chu 'hello'

   //2. ANCHOR : ^ $
      // ^ : string bắt đầu với từ nào đó, nếu nằm bên trong [] : có nghĩa phủ định
      // $ : string kết thúc với từ nào đó
   /hi/.test('hi'); // -> true
   /hi$/.test('hi'); // -> true
   /hi$/.test('welcome to hello'); // -> false
   /^hi/.test('hi welcome to hi'); // -> true
   /^hi/.test('welcome to hi'); // -> false

   //3. RANGES []
      // [a-z] : các kí tự từ a đến z in thường
      // [A-Z] : các kí tự từ A đến Z in Hoa
      // [0-9] : các số từ 0-9
      // [a-z0-9A-Z] : các số từ 0->9 hoặc từ a->z hoặc từ A->Z

   /[a-z]/.test["abcd"]; // true
   /[a-z]/.test["A"]; // false
   /[A-Z]/.test["Z"]; //true
   /[0-9]/.test["14639"]; //true vì trong 14369 từng số trong đó đều thuộc các số từ 0 đến 9
   /[^a-z]/.test["abcd"]; // false vì có dấu phủ định ^ trong ngoặc vuông
   /[0-9]/.test["abv14639zhg"]; //true 

   //4. meta characters
      //  \d : tương đương với [0-9]
      /\d/