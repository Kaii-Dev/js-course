const button = document.querySelector(".button");
function handleMouseMove(e){
   console.log(e.clientX);
}
document.addEventListener("mousemove", handleMouseMove);
button.removeEventListener("click", function(){
   document.removeEventListener("mousemove", handleMouseMove);
});