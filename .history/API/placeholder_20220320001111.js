function add(title, author) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const formPost = document.querySelector(".form-post");
console.log(formPost);
formPost.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
