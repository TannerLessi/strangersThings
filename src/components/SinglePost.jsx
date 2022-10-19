import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { deletePostById, fetchPostById, fetchMessageById } from "../api/Posts";

import useAuth from "../hooks/useAuth";
import { Placeholder } from "react-bootstrap";

function SinglePost() {
  const navigate = useNavigate();

  const { token } = useAuth();

  const { postId } = useParams();

  const [singlePost, setSinglePost] = useState({});
  const [content, setContent] = useState();

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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await fetchMessageById(
              singlePost._id,
              token,
              content
            );
            navigate("/");
          }}
        >
          <input
            placeholder="message"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></input>
          <button type="submit"> Send</button>
        </form>
      </div>
    </div>
  );
}
export default SinglePost;
