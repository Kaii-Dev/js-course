const heading = document.querySelector(".joke-heading");
const btn = document.querySelector(".joke-button");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke(){
   const response = await fetch(endpoint)
   const data= await response.json()
}