// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         const icons = {
            success : 'fa-solid fa-circle-check',
            info : 'fa-solid fa-info-check',
            warning : "fa-solid fa-circle-exclamation",
            error : 'fa-solid fa-error-check',
         }
         const icon = icons[type];
         toast.classList.add('toast', `toast--${type}`);
         toast.innerHTML = `
         <div class="toast__icon">
         <i class="${icon}"></i>
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
   type: 'warning',
   duration: 3000
})