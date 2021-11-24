
// const tabItems = document.querySelectorAll(".tab-item");
// const tabContents = document.querySelectorAll(".tab-content");
// [...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));

// function handleTabClick(event){
//    //xóa hết tất cả class active ở các tab-item
//    [...tabItems].forEach((item) => item.classList.remove("active"));
//    // add class active cho các class hiện tại
//    event.target.classList.add("active");
//    // [...tabContents][tabNumber - 1].classList.add("active");

//    //bài tập tab 2
//    const tabNumber = event.target.dataset.tab;
//    [...tabContents].forEach((item) => {
//       item.classList.remove(".active");
//       if(item.getAttribute("data-tab")=== tabNumber){
//          item.classList.add("active");
//       }
//    });
// }

window.addEventListener("load", function () {
   const tabs = document.querySelectorAll(".tab-item");
   const tabsContent = document.querySelectorAll(".tab-content");
 
   function handleChangeTab(event) {
     const tabId = event.target.dataset.tab;
     tabs.forEach((item) => item.classList.remove("active"));
     event.target.classList.add("active");
     tabsContent.forEach((item) => {
       item.classList.remove("active");
       if (item.getAttribute("data-tab") === tabId) {
         item.classList.add("active");
       }
     });
   }
 
   tabs.forEach((item) => item.addEventListener("click", handleChangeTab));
 });