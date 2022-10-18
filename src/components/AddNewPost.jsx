import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createPost } from "../api/Posts";

export default function AddNewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(title, description, price, location);
          navigate("/");
        }}
      >
        <h3>Create New Post!</h3>
        <div>
          <label>Title: </label>
          <input
            value={title}
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
