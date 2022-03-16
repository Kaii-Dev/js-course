//then - catch thì dùng để lấy dữ liệu hoặc bắt lỗi TRONG CÁI PROMISE ĐÓ

// TRY- CATCH : bắt lỗi BÊN NGOÀI PROMISE

function isFrontEndDev(languages){
   if(!languages.includes('html')){
      throw new Error ('you are not front end developer');
   }
   return new Promise(function(resolve, reject){
      setTimeout(() => {
         resolve('you are front end developer');
      } , 1000)
   })
}

const dev1= isFrontEndDev(['html', 'css', 'js']);
const dev2 = isFrontEndDev(['css', 'js', 'php']);

const devAll = Promise.allSettled([dev1, dev2]).then((data) => {
      console.log(data);
   });

   try{
      isFrontEndDev(['css'])
      .then((data)=>{
         console.log(data);
      })
      .catch((err)=>{
         console.log(err);
      })

   }
   catch(error){
      console.log('catching outside promise');
   }