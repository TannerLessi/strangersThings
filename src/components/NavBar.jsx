import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/Register"> Register</Link>
      <Link to="/Posts">Posts</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/LogOut">Log Out</Link>
    </nav>
  );
}

export default Navbar;
