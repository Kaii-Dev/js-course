//browser object model : alert, prompt, confirm, window
//location : địa chỉ trang hiện tại, cung cấp các phương thức để thay đổi địa chỉ trang
console.log(location);
console.log(window.location);

// setTimeout(()=> {
//    location.href = 'https://www.google.com';
// }, 1000);

let params = new URLSearchParams(location.search);
console.log(params);
console.log(parm);