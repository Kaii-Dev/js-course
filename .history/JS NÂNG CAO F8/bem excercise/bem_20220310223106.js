// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         const icons = {
            success : 'fa-solid fa-circle-check',
            info : "fa-solid fa-circle-info",
            warning : "fa-solid fa-circle-exclamation",
            error : 'fa-solid fa-circle-exclamation',
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



const btn_success = document.querySelector('.btn--success')
function handleSuccess(){
   toast({
      title : 'Success',
      message: 'Kết nối mạng thành công!',
      type: 'Success',
      duration: 3000
   });
}
btn_success.addEventListener("click", handleSuccess);


const btn_error = document.querySelector('.btn--danger')
function handleError(){
   toast({
      title : 'Error',
      message: 'Kết nối mạng thành công!',
      type: 'error',
      duration: 3000
   });
}
btn_error.addEventListener("click", handleError);