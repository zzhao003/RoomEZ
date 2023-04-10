import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
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
        <div className="navbar__avatar-container">
          {user && (
            <img
              className="navbar__avatar"
              alt="profile avatar"
              src={user.img_url}
            />
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
