import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import useAuth from "../hooks/useAuth";
function Navbar({ user, setToken }) {
  return (
    <nav className={styles.Navbar}>
      <Nav.Item>Welcome, {user.username}</Nav.Item>
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      {user.username === "Guest" ? (
        <>
          {""}
          <Nav.Item>
            <Link to="/auth/register"> Register</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/auth/login"> Login</Link>
          </Nav.Item>
        </>
      ) : null}
      <Nav.Item>
        <Link to="/AddNewPost">New Post</Link>
      </Nav.Item>
      <Link to="/Profile">Profile</Link>
      {user.username !== "Guest" ? (
        <Nav.Item>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
            }}
          >
            Log Out
          </Button>
        </Nav.Item>
      ) : null}
    </nav>
  );
}

export default Navbar;
