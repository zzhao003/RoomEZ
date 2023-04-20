import "./homeprofile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faSackDollar,
  faGift,
  faRestroom,
  faMapPin,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const HomeProfile = ({ feed, skipHandler, likeHandler }) => {
  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">{feed.first_name}</h1>
      </div>
      <div className="profile__img-container">
        <img alt="user profile" src={feed.img_url}></img>
      </div>
      <div className="profile__detail-container">
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faSackDollar}
          ></FontAwesomeIcon>
          <span className="profile__detail">{feed.profession}</span>
        </div>
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faGift}
          ></FontAwesomeIcon>
          <span className="profile__detail">{feed.age}</span>
        </div>
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faRestroom}
          ></FontAwesomeIcon>
          <span className="profile__detail">{feed.gender}</span>
        </div>
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faSackDollar}
          ></FontAwesomeIcon>
          <span className="profile__detail">${feed.budget}</span>
        </div>
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faMapPin}
          ></FontAwesomeIcon>
          <span className="profile__detail">{feed.area}</span>
        </div>
        <div className="profile__detail-subcontainer">
          <FontAwesomeIcon
            className="profile__detail-icon"
            icon={faCalendarDay}
          ></FontAwesomeIcon>
          <span className="profile__detail">{feed.movein_date}</span>
        </div>
      </div>

      <div className="profile__detail-container">
        <p>{feed.about}</p>
      </div>
      <div className="profile__button-container">
        <button onClick={skipHandler} className="profile__button ">
          <FontAwesomeIcon
            className="profile__icon"
            icon={faXmark}
          ></FontAwesomeIcon>
        </button>
        <button onClick={likeHandler} className="profile__button ">
          <FontAwesomeIcon
            className="profile__icon"
            icon={faCheck}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default HomeProfile;
