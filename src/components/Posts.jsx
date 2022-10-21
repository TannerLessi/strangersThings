import { useState, useEffect } from "react";

import { fetchAllPosts } from "../api/Posts";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    if (post.title.includes(text)) {
      return true;
    }
    // strings have an .includes() method
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  useEffect(() => {
    async function getAllPosts() {
      const data = await fetchAllPosts();
      setPosts(data);
    }
    getAllPosts();
  }, []);

  return (
    <div>
      <input
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {postsToDisplay.map((post) => {
        return (
          <div key={post._id}>
            <h4>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>{" "}
            </h4>
            <div>price: {post.price}</div>
            <div>seller: {post.author.username}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Posts;
