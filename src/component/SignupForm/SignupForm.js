import { useState } from "react";
import axios from "axios";
import "./signupform.scss";

const SignupForm = () => {
  const [detail, setDetail] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    race: "",
    work: "",
    budget: "",
    area: "",
    pet: "",
    move: "",
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
          placeholder="Race"
          name="race"
          value={detail.race}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="Work"
          name="work"
          value={detail.work}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          placeholder="move"
          name="move"
          value={detail.move}
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

export default SignupForm;
