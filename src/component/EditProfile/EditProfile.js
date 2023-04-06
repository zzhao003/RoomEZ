import { useState } from "react";
import axios from "axios";
import "./editprofile.scss";

const EditProfile = () => {
  const [detail, setDetail] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    profession: "",
    budget: "",
    area: "",
    pet: "",
    movein_date: "",
    about: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHander = (e) => {
    e.preventDefault();

    console.log(detail);
    // axios
    //   .post("http://localhost8000/api/signup", detail)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <form className="form" onSubmit={formSubmitHander}>
      <h2 className="form__title">Tell me about you</h2>
      <div>
        <input
          placeholder="First Name"
          name="first_name"
          value={detail.first_name}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Last Name"
          name="last_name"
          value={detail.last_name}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Age"
          name="age"
          value={detail.age}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Gender"
          name="gender"
          value={detail.gender}
          onChange={onChangeHandler}
        ></input>
      </div>

      <div>
        <input
          placeholder="profession"
          name="profession"
          value={detail.profession}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="move in date"
          name="movein_date"
          value={detail.movein_date}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Budget"
          name="budget"
          value={detail.budget}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Area"
          name="area"
          value={detail.area}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="pet"
          name="pet"
          value={detail.pet}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="about"
          name="about"
          value={detail.about}
          onChange={onChangeHandler}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditProfile;
