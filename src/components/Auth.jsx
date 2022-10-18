import { useState, useEffect } from "react";

import { registerUser, loginUser } from "../api/auth";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Auth({ setToken }) {
  const navigate = useNavigate();
  const { method } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let result;
          if (method === "register") {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }
          console.log({ username, password });
          // hit the register api route
          console.log(result);
          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
          navigate("/");
        }}
      >
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
