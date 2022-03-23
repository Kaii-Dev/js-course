//http://localhost:1312/posts
//axios : là một thư viện call api
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
