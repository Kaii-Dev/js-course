const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const image = await fetch(endpoint);
  console.log(image);
  const images = await image.json();
}
