const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
const tabActive = document.querySelector
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    panes.forEach((pane) => pane.classList.remove("active"));
    panes[index].classList.add("active");
  });
});
