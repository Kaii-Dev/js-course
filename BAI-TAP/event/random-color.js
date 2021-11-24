// bai tap random mau

const btn = document.querySelector(".change")
const colors= ["#ffa400" , "#00aefd", "#07a787", "#ff86c", "#2979ff"]

btn.addEventListener("click", handleChangeColor);

function handleChangeColor(){
   // document.body.setAttribute("style", "background-color: red")
   const getColor =colors[Math.floor(Math.random() * colors.length)]
   document.body.style.backgroundColor = getColor
}

//bai tap counter

const minus = document.querySelector(".counter-descrease")
const plus = document.querySelector(".counter-increase")
const counterNum = document.querySelector(".counter-number")
let counterValue = parseInt(counterNum.textContent);

plus.addEventListener("click", function(){
   counterValue++;
   counterNum.textContent= counterValue
})

minus.addEventListener("click", function(){
   if(counterValue <=0) return 0; 
   counterValue--;
   counterNum.textContent= counterValue
})