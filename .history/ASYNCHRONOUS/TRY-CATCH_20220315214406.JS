//then - catch thì dùng để lấy dữ liệu hoặc bắt lỗi TRONG CÁI PROMISE ĐÓ

// TRY- CATCH :

function isFrontEndDev(languages){
   if(!languages.includes('html')){
      throw new Error('you are not front end developer');
   }
   return new Promise(function(resolve, reject){
      setTimeout(() => {
         resolve('you are front end developer');
      } , 1000)
   })
}