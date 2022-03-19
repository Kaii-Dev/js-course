const endpoint = "https://picsum.photos/v2/list";
async function fetchImage(){
    const image = await fetch(endpoint);
    const images = await image.json();
}