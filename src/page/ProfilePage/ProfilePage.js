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
  }, []);

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
    <>
      <button onClick={editProfileHandler}>Edit Profile</button>
      {showEdit && <EditProfile setShowEdit={setShowEdit} />}
      <button onClick={preferenceHandler}>Search Preferences</button>
      {showPref && <Preference setShowPref={setShowPref} />}
      <h2>Setting</h2>
      <button onClick={logoutHandler}>Log Out</button>
    </>
  );
};

export default ProfilePage;
