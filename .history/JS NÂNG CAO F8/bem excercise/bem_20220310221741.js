// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         toast.classList.add('toast', );
         toast.innerHTML = `
         <div class="toast__icon">
         <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="toast__body">
         <h3 class="toast__title">${title}</h3>
         <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
         <i class="fa-solid fa-circle-xmark"></i>
      </div>
         `;
         main.appendChild(toast)
      }
}

toast({
   title : 'Success 123',
   message: 'Kết nối mạng thành công!',
   type: 'success',
   duration: 3000
})