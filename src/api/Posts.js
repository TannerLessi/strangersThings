import { json } from "react-router-dom";
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

export const createPost = async (
  title,
  description,
  price,
  location,
  token
) => {
  const response = await fetch(`${APIURL}posts`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
        location,
      },
    }),
  });
  const result = await response.json;
  return result;
};

export const deletePostById = async (id, token) => {
  const response = await fetch(`${APIURL}posts/${id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const sendMessages = async (id, token, content) => {
  console.log("ABOUT TO CREATE A MESSAGE");
  const response = await fetch(`${APIURL}posts/${id}/messages`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: { content },
    }),
  });
  const result = await response.json();
  return result;
};
