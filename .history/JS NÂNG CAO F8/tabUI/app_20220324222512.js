const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", handleTabClick)});

  function handleTabClick(){
     [...tabs].forEach((tab) => tab.classList.remove("active"));

  }
