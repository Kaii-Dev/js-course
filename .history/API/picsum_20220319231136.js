const endpoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");

    async function fetchImage() {
        const response = await fetch(endpoint);
        const images = await response.json();
        if(images.length > 0 && Array.isArray(images)){
            images.forEach(image => {})
    }
}
    fetchImage();

    function imageTemplate(){
        const template = `<div class="image-item">
        <img src="${url} alt="">
        </div>`;
        imageList.insertAdjacentHTML("beforebegin", template);
    }
