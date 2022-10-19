import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { deletePostById, fetchPostById } from "../api/Posts";

import useAuth from "../hooks/useAuth";

function SinglePost() {
  const navigate = useNavigate();

  const { token } = useAuth();

  const { postId } = useParams();

  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    async function getPostById() {
      const data = await fetchPostById(postId);
      setSinglePost(data);
    }
    getPostById();
  }, []);
  async function deletePost() {
    const result = await deletePostById(singlePost._id, token);
    navigate("/");
  }

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <p>description: {singlePost.description}</p>
        <p>location: {singlePost.location}</p>
        <p>price: {singlePost.price}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    </div>
  );
}
export default SinglePost;
