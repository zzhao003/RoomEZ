import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink>Liked</NavLink>
      <NavLink>Chat</NavLink>
      <NavLink
        to="signup"
        // className={({ isActive }) =>
        //   isActive
        //     ? "header__navigation-item header__navigation-item--active"
        //     : "header__navigation-item"
        // }
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
