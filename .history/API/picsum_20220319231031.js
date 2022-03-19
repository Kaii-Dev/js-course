const endpoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");

    async function fetchImage() {
        const response = await fetch(endpoint);
        const images = await response.json();
        if(images.length )
        console.table(images);
    }
    fetchImage();

    function imageTemplate(){
        const template = `<div class="image-item">
        <img src="${url} alt="">
        </div>`;
        imageList.insertAdjacentHTML("beforebegin", template);
    }
