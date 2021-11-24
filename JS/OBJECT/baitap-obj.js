//BÀI TẬP OBJ

      // BÀI 1: viết 1 function kiểm tra value có phải là object hay không?

      function isObj (value){
         if(typeof value === 'object' && !Array.isArray(value) && value !== null){
            return true;
         }
         return false;
      }
      // plain obj -> true , else -> flase
      console.log(isObj({}));

      // BÀI 2: tra ve 1 mang key + value, vi du {a: 1, b:2} -> [["a",1], ["b",2]]
         //cach 1
      // function KeyAndValue(obj){
      //    if (!isObject(obj)) return ;
      //    return Object.entries(obj)

      // }
      // console.log(KeyAndValue({a:1, b:2}));
         //cach 2
      function KeyAndValue(object){
         
         // const value = Object.keys(object).map(key => [key, object[key]])
         // return value;

            //cach 3
            let result = []
            for(let key in object){
               //hasOwnProperty(key) -> nếu object chứ key trả về true ngược lại trả về false
               if(object.hasOwnProperty(key)){
                  result.push([key, object[key]])
               }
            }
            return result;
      }
      console.log(KeyAndValue({a:1, b:2}));

      //BÀI 3 : without ({a:1 , b:2}, 'b') = {a:1}

      function withOut(object, ...key){
         const cloneObj = {...object};

         key.forEach((item) => {
               delete cloneObj[item]
         })
         return cloneObj
         
      //   delete object[keyword]; // ví dụ keyord đang là b thì nó sẽ delete cái object có key là b
      //   return object
      
      }
      console.log(withOut({a:1, b:2},'b', 'a'));

      //bài 4: kiểm tra 2 object truyền vào có bằng nhau không? 
          //ví dụ {a:1, b:2}, {a:1, b:2} -> true
      function isEqualObj(obj1, obj2){
         const objKey1 = Object.keys(obj1)
         const objKey2 = Object.keys(obj2)

         if(objKey1.length !== objKey2.length){
            return false
         }
         //check value of 2 object
         const result = objKey1.every(key => obj1[key] === obj2[key]);
         return result;
      }
      console.log(isEqualObj({a:1, b:2}, {a:1, b:2}));


