window.addEventListener("load", function(){
   const text = document.querySelector(".text");
   text.addEventListener("mouseenter", function(event){
      const title= event.target.dataset.tooltip; // thay ra the dataset co ten la tooltip
      const tooltipDiv = document.createElement("div");
      tooltipDiv.className = "tooltip-text";
      tooltipDiv.textContent= title;
      document.body.appendChild(tooltipDiv);
      const cords = event.target.getBoundingClientRect();
      const {top, left} = cords;
   })
});