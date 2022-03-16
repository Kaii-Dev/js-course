const endPoint = "https://api.github.com/users";
const userEle = document.querySelector(".username")
//fetches the data from the API

   async function displayUser(userName){
      const promise = await fetch(`${endPoint}/${userName}`);
      const data = await promise.json();
      console.log("displayUser", promise);
      console.log(object);
      userEle.textContent = data.name;
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
   displayUser("evondev");
