

const endpoint = " http://localhost:1312/course";

async function add({
  image, title, author, rating, price, bestSeller, buyAmount}) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  const courses = {
    image: const image = this.elements["image"].value,
    title: const title = this.elements["title"].value,
    author: const author = this.elements["author"].value,
    rating: const rating = this.elements["rating"].value,
    price: const price = this.elements["price"].value,
    bestSeller: const bestSeller = this.elements["bestSeller"].checked;
    buyAmount: "",
  };
  e.preventDefault();
  
  
  
  
  
  
  const buyAmount = this.elements["buyAmount"].value;

  add(image, title, author, rating, price, bestSeller, buyAmount);
});
