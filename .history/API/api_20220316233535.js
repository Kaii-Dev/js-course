const endPoint = "https://api.github.com/users";
const userEle = document.querySelector(".username")
//fetches the data from the API

   async function displayUser(userName){
      const promise = await fetch(`${endPoint}/${userName}`);
      console.log("displayUser", promise);
      const data = await promise.json();
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
