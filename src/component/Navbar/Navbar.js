import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHeart,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./navbar.scss";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faCompass}
        ></FontAwesomeIcon>
      </NavLink>
      <NavLink
        to="liked"
        className={({ isActive }) => (isActive ? "navbar__active" : "")}
      >
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faHeart}
        ></FontAwesomeIcon>
      </NavLink>
      <NavLink>
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faCommentDots}
        ></FontAwesomeIcon>
      </NavLink>
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
