const button = document.querySelector(".button");

function handleMouseMove(e){
   console.log(e.clientX);
}
document.addEventListener("mousemove", handleMouseMove);

button.addEventListener("click", function(){
   document.removeEventListener("mousemove", handleMouseMove);
});