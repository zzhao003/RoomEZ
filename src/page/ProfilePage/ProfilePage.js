import "./profilepage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";
import EditProfile from "../../component/EditProfile/EditProfile";
import Preference from "../../component/Preference/Preference";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [showPref, setShowPref] = useState(false);
  const { user } = useSelector((state) => state.user);

  //redirect to log in if not logged in.
  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    user.first_name || setShowEdit(true);
  }, [navigate, user]);

  const editProfileHandler = () => {
    setShowEdit(true);
  };

  const preferenceHandler = () => {
    setShowPref(true);
  };

  const logoutHandler = () => {
    dispatch(userActions.GET_USER_SUCCESS(null));
    navigate("/");
  };

  return (
    <div className="preference">
      <div>
        <img className="preference__img" src={user.img_url} />
        <h4>{user.first_name}</h4>
      </div>
      <h3 className="preference__link" onClick={editProfileHandler}>
        Edit Profile
      </h3>
      {showEdit && <EditProfile setShowEdit={setShowEdit} />}
      <h3 className="preference__link" onClick={preferenceHandler}>
        Search Preferences
      </h3>
      {showPref && <Preference setShowPref={setShowPref} />}
      <h3 className="preference__link">Setting</h3>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default ProfilePage;
