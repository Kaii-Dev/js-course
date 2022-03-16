const endPoint = "https://api.gitub.com/users";
const userEle = document.querySelector(".username")
//fetches the data from the API

   async function displayUser(userName){
      const promise = await fetch(`${endPoint}/${userName}`);
      const data = await promise.json();
      console.log("displayUser", promise);
      userEle.textContent = data.login;
      // promise
      //    .then(response =>{
      //       return response.json();
      //    })
      //    .then(data =>{
      //       console.log(data);
      //       console.log(data.login);
      //    })
      //    .catch(error =>{
      //       console.log(error);
      //    })
   }
   function handleErr(error){
      console.log(object);
   }
   console.log(displayUser("evondev"));
   
