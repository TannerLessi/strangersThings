import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { fetchPostById } from "../api/Posts";

function SinglePost() {
  const navigate = useNavigate();

  const { postId } = useParams();

  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    async function getPostById() {
      const data = await fetchPostById(postId);
      setSinglePost(data);
    }
    getPostById();
  }, []);

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <p>description: {singlePost.description}</p>
        <p>location: {singlePost.location}</p>
        <p>price: {singlePost.price}</p>
        <p></p>
      </div>
    </div>
  );
}
export default SinglePost;
