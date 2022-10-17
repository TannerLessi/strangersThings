import { useState, useEffect } from "react";

import Register from "./components/Register";
import { registerUser } from "./api/auth";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getMe() {
      console.log("Token before fetch");
      const result = await registerUser(token);
      console.log(result);
      setUser(result.data);
    }
    if (token) {
      getMe();
    }
    console.log("in the useEffect");
  }, [token]);

  return (
    <div className="App">
      <h4>{user?.username}</h4>
      <Register setToken={setToken} />
    </div>
  );
}

export default App;
