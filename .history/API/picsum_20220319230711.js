const endpoint = "https://picsum.photos/v2/list";
const imageList =
async function fetchImage() {
  const response = await fetch(endpoint);
  const images = await response.json();
  console.table(images);
}
fetchImage();
