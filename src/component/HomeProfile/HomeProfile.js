import { useEffect } from "react";
import "./homeprofile.scss";
import axios from "axios";
const dummy = {
  id: 1,
  img_url:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  first_name: "James",
  last_name: "Chen",
  age: 27,
  gender: "Male",
  profession: "writer",
  budegt: 2000,
  area: "soho",
  pet: false,
  movein_date: "date string",
  about:
    "Very easy going, clean, and professions in an office 5 days a week! I profession in fashion so I’m always down to hit up thrift stores, also a big foodie so always trying new restaurants in the city! I am also very independent and love alone time as well.",
};

const HomeProfile = () => {
  const skipHandler = () => {
    //should fetch a new profile based on search criteria
    console.log("skip");
  };
  const likeHandler = () => {
    //should send a like to the profile, and notify user
    console.log("like");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile">
      <div className="profile__name-container">
        <h1 className="profile__name">{dummy.first_name}</h1>
      </div>
      <div className="profile__img-container">
        <img src={dummy.imgURL}></img>
      </div>
      <div className="profile__detail-container">
        <p className="profile__detail">{dummy.profession}</p>
        <p className="profile__detail">{dummy.age}</p>
        <p className="profile__detail">{dummy.gender}</p>
        <p className="profile__detail">{dummy.budegt}</p>
        <p className="profile__detail">{dummy.area}</p>
        <p className="profile__detail">{dummy.movein_date}</p>
      </div>

      <div className="profile__detail-container">
        <p>about</p>
        <p>{dummy.about}</p>
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
