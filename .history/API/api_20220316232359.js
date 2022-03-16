const endPoint = "https://jsonplaceholder.typicode.com/todos/1"

//fetches the data from the API

const promise = fetch(endPoint);

promise
   .then(response =>{
      return response.json();
   })
   .then(data =>{
      console.log(data);
   })
   .catch(error =>{
      console.log(error);
   })