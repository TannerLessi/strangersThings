import { APIURL, cohortName } from "./auth";

export const fetchAllPosts = async () => {
  const response = await fetch(`${APIURL}posts`);
  const result = await response.json();
  return result.data.posts;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${APIURL}posts`);
  const result = await response.json();
  const singlePost = result.data.posts.filter((element) => {
    return element._id == id;
  })[0];
  return singlePost;
};

export const createPost = async (title, description, price, location) => {
  const response = await fetch(`${APIURL}posts`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      price,
      location,
    }),
  });
  const result = await response.json;
  return result;
};
