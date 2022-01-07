const button = document.querySelector(".button");

function handleMouseMove(e){
   console.log(e.clientX);
}
document.addEventListener("mousemove", handleMouseMove);

// khi muốn removeEventListener phải truyền function viết sẵn từ trước thay vì tới lúc add mới viết
button.addEventListener("click", function(){
   document.removeEventListener("mousemove", handleMouseMove);
});