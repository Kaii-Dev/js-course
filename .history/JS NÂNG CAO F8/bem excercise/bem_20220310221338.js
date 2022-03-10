// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         toast.classList.add('toast');
         toast.innerHTML = `
         <div class="toast__icon">
         <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="toast__body">
         <h3 class="toast__title">Success</h3>
         <p class="toast__msg">Kết nối mạng thành công</p>
      </div>
      <div class="toast__close">
         <i class="fa-solid fa-circle-xmark"></i>
      </div>
         `;
      }
}

toast({
   title : 'Success',
   message: 'Kết nối mạng thành công!',
   type: 'success',
   duration: 3000
})