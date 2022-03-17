// API : CỔNG GIAO DIỆN GIỮA CÁC PHẦN MỀM
//fetch sử dụng trong promise
const endpoint = 'https://jsonplaceholder.typicode.com/posts';

async function handleAPI(){
   const response = await fetch(endpoint);
   console.log(response);
   const data = await response.json();
   console.log(data);
}
handleAPI();

fec