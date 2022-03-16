// const endPoint = "https://jsonplaceholder.typicode.com/todos/1"

const en
//fetches the data from the API

   function displayUser(userName){
      const promise = fetch(endPoint);
      promise
         .then(response =>{
            return response.json();
         })
         .then(data =>{
            console.log(data);
            console.log(data.userId);
         })
         .catch(error =>{
            console.log(error);
         })
   }