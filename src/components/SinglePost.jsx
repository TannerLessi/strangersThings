import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { deletePostById, fetchPostById, sendMessages } from "../api/Posts";

import useAuth from "../hooks/useAuth";
import { Placeholder } from "react-bootstrap";

function SinglePost() {
  const navigate = useNavigate();

  const { token, user } = useAuth();

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
  async function createMsg() {
    console.log("in createMsg");
    const result = await sendMessages(singlePost._id, token, content);
  }

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <p>description: {singlePost.description}</p>
        <p>location: {singlePost.location}</p>
        <p>price: {singlePost.price}</p>
        {
          //* if the user is equals the auther id it will display the delete button
        }
        {user?._id === singlePost.author?._id && (
          <button onClick={deletePost}>Delete</button>
        )}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("in onSubmit");
            await createMsg();
            navigate("/");
          }}
        >
          <input
            placeholder="message"
            type="text"
            value={content || ""}
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
