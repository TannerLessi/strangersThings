import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import useAuth from "../hooks/useAuth";
function Navbar({ user, setToken }) {
  return (
    <Nav className={styles.container}>
      <Nav.Item className="navItem">Welcome, {user.username}</Nav.Item>
      <Nav.Item className="navItem">
        <Link to="/">Home</Link>
      </Nav.Item>
      {user.username === "Guest" ? (
        <>
          {""}
          <Nav.Item className="navItem">
            <Link to="/auth/register"> Register</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/auth/login"> Login</Link>
          </Nav.Item>
        </>
      ) : null}

      {user.username !== "Guest" ? (
        <>
          <Nav.Item className="navItem">
            <Link to="/AddNewPost">Create New Post</Link>
          </Nav.Item>
          <Link to="/Profile">Profile</Link>
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
        </>
      ) : null}
    </Nav>
  );
}

export default Navbar;
