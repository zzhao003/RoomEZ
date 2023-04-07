import { useState } from "react";
import EditProfile from "../../component/EditProfile/EditProfile";

const ProfilePage = () => {
  const [showEdit, setShowEdit] = useState(false);
  const editProfileHandler = () => {
    setShowEdit(true);
  };

  const preferenceHandler = () => {
    console.log("Edit Preferences");
  };

  return (
    <>
      <button onClick={editProfileHandler}>Edit Profile</button>
      {showEdit && <EditProfile setShowEdit={setShowEdit} />}
      <button onClick={preferenceHandler}>Search Preferences</button>
      <h2>Setting</h2>
    </>
  );
};

export default ProfilePage;
