import { useState, useEffect } from "react";

import { fetchAllPosts } from "../api/Posts";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const data = await fetchAllPosts();
      setPosts(data);
    }
    getAllPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        console.log(post);
        return (
          <div key={post._id}>
            <h3>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>{" "}
            </h3>
            <div>price: {post.price}</div>
            <div>seller: {post.author.username}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Posts;
