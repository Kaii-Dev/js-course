//http://localhost:1312/posts
//axios : là một thư viện call api
const endpoint = "http://localhost:1312/posts";

async function getPosts() {
  try {
    const response = await axios.get(endpoint);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
getPosts();

async function addPosts(post) {
  axios
    .post(endpoint, {
      title: post.title,
      description: post.description,
      title: post.title,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
addPosts({
   title: "Post title",
   description: "Post description",
   title
})