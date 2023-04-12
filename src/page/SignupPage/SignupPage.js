import "./signuppage.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [signUpInfo, SetSignUpInfo] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

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
          navigate("/login");
        }, 1000);
      })
      .catch((err) => setMsg(err.response.data));
  };

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={SignUpHandler}>
        <h2 className="signup__header">Sign Up</h2>
        <div>
          <label>Email</label>
          <input
            required
            name="email"
            // type="email"
            value={signUpInfo.email}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            value={signUpInfo.password}
            onChange={onChangeHandler}
          ></input>
        </div>
        <h2>{msg}</h2>
        <button type="submit">Sign Up</button>
        <Link className="signup__link" to="/login">
          Log In
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
