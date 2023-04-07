import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../component/EditProfile/EditProfile";
import Preference from "../../component/Preference/Preference";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [showPref, setShowPref] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  //redirect to log in if not logged in.
  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
  }, []);

  const editProfileHandler = () => {
    setShowEdit(true);
  };

  const preferenceHandler = () => {
    setShowPref(true);
  };

  return (
    <>
      <button onClick={editProfileHandler}>Edit Profile</button>
      {showEdit && <EditProfile setShowEdit={setShowEdit} />}
      <button onClick={preferenceHandler}>Search Preferences</button>
      {showPref && <Preference setShowPref={setShowPref} />}
      <h2>Setting</h2>
      <button>Log Out</button>
    </>
  );
};

export default ProfilePage;
