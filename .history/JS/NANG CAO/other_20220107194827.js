const button = document.querySelector(".button");

function handleMouseMove(e){
   console.log(e.clientX);
}
document.addEventListener("mousemove", handleMouseMove);

// khi muốn remove phải truyền function
button.addEventListener("click", function(){
   document.removeEventListener("mousemove", handleMouseMove);
});