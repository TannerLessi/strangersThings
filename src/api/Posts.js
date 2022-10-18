import { APIURL, cohortName } from "./auth";

export const fetchAllPosts = async () => {
  const response = await fetch(`${APIURL}posts`);
  const result = await response.json();
  return result.data.posts;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${APIURL}posts`);
  const result = await response.json();
  const singlePost = result.data.posts.filter((element)=>{
    return element._id==id
  })[0]
  return singlePost;
};
