import { useNavigate } from "react-router-dom";

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
      <h3>{singlePost.title}</h3>
    </div>
  );
}
export default SinglePost;
