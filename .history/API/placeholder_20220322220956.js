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
      image: 
  title: "",
  author: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: "",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
    e.preventDefault();
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  add(title, author);
});