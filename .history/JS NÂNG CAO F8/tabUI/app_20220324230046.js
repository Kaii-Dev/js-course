const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
const line = document.querySelector(".tabs .line");
console.log(tabActive);
console.log(line);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    [...tabs].forEach((tab) => tab.classList.remove("active"));
    this.classList.add("active");
    panes.forEach((pane) => pane.classList.remove("active"));
    panes[index].classList.add("active");
  });
});
