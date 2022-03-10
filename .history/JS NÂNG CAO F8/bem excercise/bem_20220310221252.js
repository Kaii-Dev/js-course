// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         toast.classList
      }
}

toast({
   title : 'Success',
   message: 'Kết nối mạng thành công!',
   type: 'success',
   duration: 3000
})