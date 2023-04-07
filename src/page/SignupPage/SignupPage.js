import { useState } from "react";
import axios from "axios";
import EditProfile from "../../component/EditProfile/EditProfile";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [signUpInfo, SetSignUpInfo] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const redirect = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetSignUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  const SignUpHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/signup", signUpInfo)
      .then((res) => {
        setMsg("Sign up seccessful");
        setTimeout(() => {
          redirect("/login");
        }, 1000);
      })
      .catch((err) => setMsg(err.response.data));
  };

  return (
    <>
      <form onSubmit={SignUpHandler}>
        <h2>Sign Up</h2>
        <label>Eamil</label>
        <input
          required
          name="email"
          value={signUpInfo.email}
          onChange={onChangeHandler}
        ></input>
        <label>Password</label>
        <input
          required
          name="password"
          value={signUpInfo.password}
          onChange={onChangeHandler}
        ></input>
        <button type="submit">Sign Up</button>
        <h2>{msg}</h2>
      </form>
      <button
        onClick={() => {
          redirect("/login");
        }}
      >
        Log In
      </button>
    </>
  );
};

export default SignupPage;
