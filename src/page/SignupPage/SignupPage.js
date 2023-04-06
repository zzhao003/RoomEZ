import { useState } from "react";
import axios from "axios";
import EditProfile from "../../component/EditProfile/EditProfile";

const SignupPage = () => {
  const [signUpInfo, SetSignUpInfo] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetSignUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  const SignUpHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/signup", signUpInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={SignUpHandler}>
        <h2>Sign Up</h2>
        <label>Eamil</label>
        <input
          name="email"
          value={signUpInfo.email}
          onChange={onChangeHandler}
        ></input>
        <label>Password</label>
        <input
          name="password"
          value={signUpInfo.password}
          onChange={onChangeHandler}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      {/* <SignupForm /> */}
    </>
  );
};

export default SignupPage;
