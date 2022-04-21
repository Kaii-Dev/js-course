const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    if(e.target.matches(".active")){
      e.target.classList.remove("active");
    }
  });
});
