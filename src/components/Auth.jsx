import { useState, useEffect } from "react";

import { registerUser, loginUser } from "../api/auth";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Auth({ setToken }) {
  const navigate = useNavigate();
  const { method } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  return (
    <div>
      <form
        class="pure-form pure-form-stacked"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          let result;
          if (method === "register") {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }

          // hit the register api route

          //check if there is an error from the api
          if (result.success) {
            const token = result.data.token;
            localStorage.setItem("token", token);
            setToken(token);
            setPassword("");
            setUsername("");
            navigate("/");
          } else {
            setError(result.error.message);
          }
        }}
      >
        {error && <h5>{error}</h5>}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}
