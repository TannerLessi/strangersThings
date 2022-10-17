import Register from "./components/Register";
import useAuth from "./hooks/useAuth";
import NavBar from "./components/NavBar";
import "./App.css";
import Posts from "./components/Posts";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <h4>{user?.username}</h4>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Posts/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
