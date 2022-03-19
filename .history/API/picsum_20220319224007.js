const endpoint = "https://picsum.photos/v2/list";
async function fetchImage(){
    const image = await fetch(endpoint);
    console.log(object);
    const images = await image.json();
}