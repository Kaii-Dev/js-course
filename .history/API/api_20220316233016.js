// const endPoint = "https://jsonplaceholder.typicode.com/todos/1"

const endPoint = "https://api.github.com/users";
//fetches the data from the API

   function displayUser(userName){
      const promise = fetch(`${endPoint}/${userName}`);
      promise
         .then(response =>{
            return response.json();
         })
         .then(data =>{
            console.log(data);
            console.log(data.login);
         })
         .catch(error =>{
            console.log(error);
         })
   }
   displayUser("evondev")