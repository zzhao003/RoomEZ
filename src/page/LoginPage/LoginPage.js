import "./loginpage.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";

const LoginPage = () => {
  const [loginInfo, SetLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const LoginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/login", loginInfo)
      .then((res) => {
        // console.log(res.data);
        dispatch(userActions.GET_USER_SUCCESS(res.data));
        if (res.data.first_name) {
          navigate("/");
        } else {
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(userActions.GET_USER_FAILED(err.response.data));
      });
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={LoginHandler}>
        <h2 className="login__header">Log In</h2>
        <div>
          <label>Email</label>
          <input
            required
            name="email"
            // type="email"
            value={loginInfo.email}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={onChangeHandler}
          ></input>
        </div>
        <h2>{error}</h2>
        <button type="submit">Log In</button>
        <Link className="login__link" to="/signup">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
