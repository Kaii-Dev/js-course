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

async function add(image,title, author) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(courses),
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