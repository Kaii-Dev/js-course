const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

function handleTabClick(e) {
  [...tabs].forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
  const pane = pane[index];
  console.log(pane);
}
