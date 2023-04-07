import "./homeprofile.scss";

const HomeProfile = ({ feed }) => {
  const skipHandler = () => {
    //should fetch a new profile based on search criteria
    console.log("skip");
  };
  const likeHandler = () => {
    //should send a like to the profile, and notify feed
    console.log("like");
  };

  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">{feed.first_name}</h1>
      </div>
      <div className="profile__img-container">
        <img src={feed.img_url}></img>
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
