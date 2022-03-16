const endPoint = 'https://api.github.com/users/blackguy2611/";

//fetches the data from the API

const promise = fetch(endPoint);

promise
   .then(response =>{
      console.log(response);
   })
   .catch(error =>{
      console.log(error);
   })