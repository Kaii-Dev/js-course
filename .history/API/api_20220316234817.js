const endPoint = "https://api.gitub.com/users";
const userEle = document.querySelector(".username")
//fetches the data from the API

   async function displayUser(userName){
      const promise = await fetch(`${endPoint}/${userName}`);
      const data = await promise.json();
      console.log("displayUser", promise);
      userEle.textContent = data.login;
   }
   function handleErr(error){
      console.log('error)';
   }
   displayUser("evondev").catch(handleErr)
   
