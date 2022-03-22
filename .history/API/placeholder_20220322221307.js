const courses = {
  image: "",
  title: "",
  author: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: "",
};

const endpoint = " http://localhost:1312/course";

async function add(image,title, author, rating, price, bestSeller, buyAmount) {
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
    e.preventDefault();
  const image = this.elements["image"].value;
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  const rating = this.elements["rating"].value;
  const price = this.elements["price"].value;
  const bestSeller = this.elements["bestSeller"].value;
  const buyAmount = this.elements["buyAmount"].value;
  console.log(bes);
  // add(image,title, author, rating, price, bestSeller, buyAmount);
});