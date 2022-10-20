import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import {
  deletePostById,
  fetchPostById,
  sendMessages,
  editPost,
} from "../api/Posts";

import useAuth from "../hooks/useAuth";
import { Placeholder } from "react-bootstrap";

function SinglePost() {
  const navigate = useNavigate();

  const { token, user } = useAuth();

  const { postId } = useParams();

  const [singlePost, setSinglePost] = useState({});

  const [content, setContent] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

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

  async function editPosts() {
    const result = await editPost(
      singlePost._id,
      description,
      price,
      location,
      token
    );
  }

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <p>description: {singlePost.description}</p>
        <p>location: {singlePost.location}</p>
        <p>price: {singlePost.price}</p>
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
        {
          //* if the user is equals the auther id it will display the delete button
        }
        {user?._id === singlePost.author?._id && (
          <>
            <button onClick={deletePost}>Delete</button>
            <button>Edit</button>
            <div>
              <form
                class="pure-form pure-form-stacked"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const result = await editPost(
                    title,
                    description,
                    price,
                    location,
                    token
                  );
                  navigate("/posts/:postId");
                }}
              >
                <div>
                  <label> </label>
                  <input
                    value={title}
                    type="text"
                    placeholder="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label> </label>
                  <input
                    value={description}
                    type="text"
                    placeholder="description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <label> </label>
                  <input
                    value={location}
                    type="text"
                    placeholder="location"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <label> </label>
                  <input
                    value={price}
                    type="text"
                    placeholder="price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <button type="submit">Submit </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default SinglePost;
