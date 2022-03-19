const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const response = await fetch(endpoint);
  const image = await resp
  console.log(response);
}
fetchImage();
