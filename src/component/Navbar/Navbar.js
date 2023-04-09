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
      <NavLink
        to="liked"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        Liked
      </NavLink>
      <NavLink>Chat</NavLink>
      <NavLink
        to="profile"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
