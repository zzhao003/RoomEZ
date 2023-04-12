import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHeart,
  faCompass,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "navbar__icon-label-container--active"
            : "navbar__icon-label-container"
        }
      >
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faCompass}
        ></FontAwesomeIcon>
        <p className="navbar__label">Home</p>
      </NavLink>
      <NavLink
        to="liked"
        className={({ isActive }) =>
          isActive
            ? "navbar__icon-label-container--active"
            : "navbar__icon-label-container"
        }
      >
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faHeart}
        ></FontAwesomeIcon>
        <p className="navbar__label">Likes</p>
      </NavLink>
      <NavLink
        to="chat"
        className={({ isActive }) =>
          isActive
            ? "navbar__icon-label-container--active"
            : "navbar__icon-label-container"
        }
      >
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faComments}
        ></FontAwesomeIcon>
        <p className="navbar__label">Chats</p>
      </NavLink>
      <NavLink
        to="profile"
        className={({ isActive }) =>
          isActive
            ? "navbar__icon-label-container--active"
            : "navbar__icon-label-container"
        }
      >
        {user ? (
          <img
            className="navbar__avatar"
            alt="profile avatar"
            src={user.img_url}
          />
        ) : (
          <FontAwesomeIcon
            className="navbar__icon"
            icon={faUser}
          ></FontAwesomeIcon>
        )}
        <p className="navbar__label">Profile</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
