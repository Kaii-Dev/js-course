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


async function addPosts(pót)
