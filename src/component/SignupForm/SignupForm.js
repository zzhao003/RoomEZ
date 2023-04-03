import { useState } from "react";
import "./signupform.scss";

const SignupForm = () => {
  const [detail, setDetail] = useState({
    first_name: "",
    last_name: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHander = (e) => {
    e.preventDefault();
    console.log("testing");
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
        <input placeholder="Age" name="age"></input>
      </div>
      <div>
        <input placeholder="Gender" name="gender"></input>
      </div>
      <div>
        <input placeholder="Race" name="race"></input>
      </div>
      <div>
        <input placeholder="Work" name="work"></input>
      </div>
      <div>
        <input placeholder="move" name="move"></input>
      </div>
      <div>
        <input placeholder="Budget" name="budget"></input>
      </div>
      <div>
        <input placeholder="interest" name="interest"></input>
      </div>
      <div>
        <input placeholder="pet" name="pet"></input>
      </div>
      <div>
        <input placeholder="about" name="about"></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
