//browser object model : alert, prompt, confirm, window
//location : địa chỉ trang hiện tại, cung cấp các phương thức để thay đổi địa chỉ trang
console.log(location);
console.log(window.location);

// setTimeout(()=> {
//    location.href = 'https://www.google.com';
// }, 1000);

let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get('type'));
console.log(params.get('page'));
console.log(params.set('page',10));
console.log(params.has('page'));
for(let it of params.keys()){
   console.log(it);
}
for(let it of params.values()){
   console.log(it);
}

params.delete('page');

//history trong BOM
console.log(window.history);
// history.back(); // quay lại trang trước
// history.forward(); di chuyển tới trang sau
// history.go(); di chuyển tới trang tùy chọn với tham số truyền vào hàm go

//3. Navigator : định nghĩa các thông tin về trình duyệt, máy tính, hệ điều hành, các thông tin về trình duyệt
console.log(window.navigator.userAgent);