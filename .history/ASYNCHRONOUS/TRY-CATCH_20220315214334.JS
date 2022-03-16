//then - catch thì dùng để lấy dữ liệu hoặc bắt lỗi TRONG CÁI PROMISE ĐÓ

// TRY- CATCH :

function isFrontEndDev(languages){
   return new Promise(function(resolve, reject){
      if(!languages.includes('html')){
         reject('you are not front end developer');
      }
      if(!languages.includes('html')){
         reject('you are not front end developer');
      }
      setTimeout(() => {
         resolve('you are front end developer');
      } , 1000)
   })
}