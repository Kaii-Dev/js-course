const endpoint = " http://localhost:1312/course";

async function add({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(endpoint, {
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
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const courses = {
    image: (image = this.elements["image"].value),
    title: (title = this.elements["title"].value),
    author: (author = this.elements["author"].value),
    rating: (rating = this.elements["rating"].value),
    price: (price = this.elements["price"].value),
    bestSeller: this.elements["bestSeller"].checked),
    buyAmount: (buyAmount = this.elements["buyAmount"].value),
  };
  await add(courses);
  this.reset();
});
