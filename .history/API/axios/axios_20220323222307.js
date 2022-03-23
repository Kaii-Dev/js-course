//http://localhost:1312/posts
const endpoint = "http://localhost:1312/posts";

function getPosts() {
  axios
    .get(endpoint)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getPosts();
