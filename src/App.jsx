import Auth from "./components/Auth";
import useAuth from "./hooks/useAuth";
import NavBar from "./components/NavBar";
import "./App.css";
import Posts from "./components/Posts";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  const { setToken, user } = useAuth();

  return (
    <div className="App">
      <NavBar user={user} setToken={setToken} />
      <Routes>
        <Route path="/auth/:method" element={<Auth setToken={setToken} />} />
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
