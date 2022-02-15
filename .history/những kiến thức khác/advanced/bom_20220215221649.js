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

params.delelte('page');

//history trong BOM
console.log(window.history);
// history.back();
// history.forward();