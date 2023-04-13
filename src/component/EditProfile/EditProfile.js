import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";
import axios from "axios";
import "./editprofile.scss";

const EditProfile = ({ setShowEdit }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [detail, setDetail] = useState({
    id: user.id,
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    age: user.age || "",
    gender: user.gender || "",
    profession: user.profession || "",
    budget: user.budget || "",
    area: user.area || "",
    pet: user.pet || "",
    movein_date: user.movein_date || "",
    about: user.about || "",
    img_url: user.img_url || "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const fileSelectHandler = (e) => {
    setDetail((prev) => ({ ...prev, img_url: e.target.files[0] }));
  };

  const formSubmitHander = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in detail) {
      formData.append(key, detail[key]);
    }

    axios
      .put("http://localhost:8080/api/feed", formData)
      .then((res) => {
        console.log(res.data);
        setShowEdit(false);
        //update redux user state
        dispatch(userActions.GET_USER_SUCCESS(res.data));
      })
      .catch((err) => console.log(err));
  };

  const cancelHandler = () => {
    setShowEdit(false);
  };
  return (
    <form className="editform" onSubmit={formSubmitHander}>
      <h2 className="editform__title">Edit Your Profile</h2>
      <div>
        <label>Fist Name</label>
        <input
          placeholder="First Name"
          name="first_name"
          value={detail.first_name}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name="last_name"
          value={detail.last_name}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          placeholder="Age"
          name="age"
          value={detail.age}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Gender</label>
        <input
          placeholder="Gender"
          name="gender"
          value={detail.gender}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Profession</label>
        <input
          placeholder="profession"
          name="profession"
          value={detail.profession}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Move In Date</label>
        <input
          placeholder="move in date"
          name="movein_date"
          value={detail.movein_date}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Budget</label>
        <input
          placeholder="Budget"
          name="budget"
          value={detail.budget}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Area</label>
        <input
          placeholder="Area"
          name="area"
          value={detail.area}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Pet</label>
        <input
          placeholder="pet"
          name="pet"
          value={detail.pet}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>About</label>
        <textarea
          placeholder="about"
          name="about"
          value={detail.about}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div>
        <label>Profil Picture</label>
        <input
          type="file"
          placeholder="image"
          name="image"
          onChange={fileSelectHandler}
        ></input>
      </div>

      <button className="editform__submit" type="submit">
        Submit
      </button>
      <button type="button" onClick={cancelHandler}>
        Cancel
      </button>
    </form>
  );
};

export default EditProfile;
