const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", handleTabClick);
  const pane = panes[index];
  console.log(pane);
});

function handleTabClick(e) {
  [...tabs].forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
}
