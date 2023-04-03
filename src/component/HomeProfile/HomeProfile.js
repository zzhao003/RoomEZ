import "./homeprofile.scss";

const HomeProfile = () => {
  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">James</h1>
      </div>
      <div className="profile__img-container">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"></img>
      </div>
      <div className="profile__detail-container">
        <p className="profile__detail">Writer</p>
        <p className="profile__detail">budget</p>
        <p className="profile__detail">Writer</p>
        <p className="profile__detail">budget</p>
        <p className="profile__detail">Writer</p>
        <p className="profile__detail">budget</p>
      </div>

      <div className="profile__detail-container">
        <p>about</p>
        <p>
          Very easy going, clean, and works in an office 5 days a week! I work
          in fashion so I’m always down to hit up thrift stores, also a big
          foodie so always trying new restaurants in the city! I am also very
          independent and love alone time as well.
        </p>
      </div>
    </div>
  );
};

export default HomeProfile;
