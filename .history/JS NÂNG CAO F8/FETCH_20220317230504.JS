// API : CỔNG GIAO DIỆN GIỮA CÁC PHẦN MỀM
//fetch nó sử dụng promise, khi nó được gọi thì nó sẽ trả về promise
const endpoint = 'https://jsonplaceholder.typicode.com/posts';

async function handleAPI(){
   const response = await fetch(endpoint);
   const data = await response.json();
   console.log(data);
}
handleAPI();

