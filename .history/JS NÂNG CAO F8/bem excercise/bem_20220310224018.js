// show toast function
function toast(
   {title = '', message='', type = 'info', duration =3000})
   {
      const main = document.getElementById('toast');
      if(main){
         const toast = document.createElement('div');
         toast.addEventListener("click", function(e){
            if(e.target)
         })
         const icons = {
            success : 'fa-solid fa-circle-check',
            info : "fa-solid fa-circle-info",
            warning : "fa-solid fa-circle-exclamation",
            error : 'fa-solid fa-circle-exclamation',
         }
         const icon = icons[type];
         const delay = (duration / 1000).toFixed(2);
         toast.classList.add('toast', `toast--${type}`);
         toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
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
         setTimeout(() => {
            main.removeChild(toast);
         }, duration +1000);
      }
}



const btn_success = document.querySelector('.btn--success')
function handleSuccess(){
   toast({
      title : 'Thành công',
      message: 'Đăng kí tài khoản thành công',
      type: 'success',
      duration: 3000
   });
}
btn_success.addEventListener("click", handleSuccess);


const btn_error = document.querySelector('.btn--danger')
function handleError(){
   toast({
      title : 'Thất bại',
      message: 'Có lỗi xảy ra, vui lòng liên hệ admin',
      type: 'error',
      duration: 3000
   });
}
btn_error.addEventListener("click", handleError);