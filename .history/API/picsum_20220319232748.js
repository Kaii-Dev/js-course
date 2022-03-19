const endpoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
let images = [];
let page =1;
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="">
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

async function fetchImage(page) {
  const response = await fetch(`${endpoint}&page=${page}`);
  images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    images.forEach((image) => {
      imageTemplate(image.download_url);
    });
  }
}

async function handleLoadMore() {
    page
}

loadMore.addEventListener("click", handleLoadMore);
fetchImage();
