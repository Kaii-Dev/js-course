const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const images = await fetch(endpoint);
  //   const images = await image.json();
  console.log("helló");
}
