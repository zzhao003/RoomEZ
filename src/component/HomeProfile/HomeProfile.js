import "./homeprofile.scss";

const HomeProfile = ({ user }) => {
  const skipHandler = () => {
    //should fetch a new profile based on search criteria
    console.log("skip");
  };
  const likeHandler = () => {
    //should send a like to the profile, and notify user
    console.log("like");
  };

  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">{user.first_name}</h1>
      </div>
      <div className="profile__img-container">
        <img src={user.img_url}></img>
      </div>
      <div className="profile__detail-container">
        <p className="profile__detail">{user.profession}</p>
        <p className="profile__detail">{user.age}</p>
        <p className="profile__detail">{user.gender}</p>
        <p className="profile__detail">{user.budget}</p>
        <p className="profile__detail">{user.area}</p>
        <p className="profile__detail">{user.movein_date}</p>
      </div>

      <div className="profile__detail-container">
        <p>about</p>
        <p>{user.about}</p>
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
