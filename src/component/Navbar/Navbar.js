import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        Home
      </NavLink>
      <NavLink>Liked</NavLink>
      <NavLink>Chat</NavLink>
      <NavLink
        to="signup"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
