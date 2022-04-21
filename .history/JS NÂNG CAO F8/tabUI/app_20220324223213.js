const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", handleTabClick);
});

function handleTabClick(e) {
  [...tabs].forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
  e.target.classList.add("active");
  [...panes].forEach((pane) => pane.classList.remove("active"));
  e
}
