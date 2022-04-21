const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", handleTabClick);
  index.addEventListener("click", handlePaneClick);
});


function handleTabClick(e) {
  [...tabs].forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
}
