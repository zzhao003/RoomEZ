import "./landingpage.scss";
import landingIcon from "../../asset/house (1).png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <img className="landing__img" src={landingIcon} alt="landing" />
      <h1>ROOMEZ</h1>
      <div className="landing__p-container">
        <p>Find your perfect</p>
        <p>{`  roomate match`}</p>
      </div>
      <Link className="landing__signup" to="/signup">
        Get Started
      </Link>
      <Link className="landing__login" to="/login">
        Log In
      </Link>
    </div>
  );
};

export default LandingPage;
