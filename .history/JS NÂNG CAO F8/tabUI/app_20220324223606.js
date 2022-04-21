const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
  index.addEventListener("click", handlePaneClick);
});

function handleTabClick(e) {
  [...tabs].forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
}

function handlePaneClick(e) {
  [...panes].forEach((pane) => pane.classList.remove("active"));
  e.target.classList.add("active");
}
