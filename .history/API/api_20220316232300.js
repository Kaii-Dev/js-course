const endPoint = "httpsgithub.com/user/repo/main/db.json"

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