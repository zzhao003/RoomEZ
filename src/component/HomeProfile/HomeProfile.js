import "./homeprofile.scss";

const HomeProfile = ({ feed, setNewFeed, skipHandler, likeHandler }) => {
  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">{feed.first_name}</h1>
      </div>
      <div className="profile__img-container">
        <img alt="user profile" src={feed.img_url}></img>
      </div>
      <div className="profile__detail-container">
        <p className="profile__detail">{feed.profession}</p>
        <p className="profile__detail">{feed.age}</p>
        <p className="profile__detail">{feed.gender}</p>
        <p className="profile__detail">{feed.budget}</p>
        <p className="profile__detail">{feed.area}</p>
        <p className="profile__detail">{feed.movein_date}</p>
      </div>

      <div className="profile__detail-container">
        <p>about</p>
        <p>{feed.about}</p>
      </div>
      <div className="profile__button-container">
        <button onClick={skipHandler} className="profile__button ">
          X
        </button>
        <button onClick={likeHandler} className="profile__button ">
          Y
        </button>
      </div>
    </div>
  );
};

export default HomeProfile;
