import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink>Home</NavLink>
      <NavLink>Liked</NavLink>
      <NavLink>Chat</NavLink>
      <NavLink>Profile</NavLink>
    </div>
  );
};

export default Navbar;
