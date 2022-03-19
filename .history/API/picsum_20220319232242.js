const endpoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
const image = []
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="">
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

async function fetchImage() {
  const response = await fetch(endpoint);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    images.forEach((image) => {
      imageTemplate(image.download_url);
    });
  }
}
fetchImage();
