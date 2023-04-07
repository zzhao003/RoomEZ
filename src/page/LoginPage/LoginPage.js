import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(userActions.GET_USER_FAILED(err.response.data));
      });
  };

  return (
    <>
      <form onSubmit={LoginHandler}>
        <h2>Log In</h2>
        <label>Eamil</label>
        <input
          required
          name="email"
          value={loginInfo.email}
          onChange={onChangeHandler}
        ></input>
        <label>Password</label>
        <input
          required
          name="password"
          value={loginInfo.password}
          onChange={onChangeHandler}
        ></input>
        <h2>{error}</h2>
        <button type="submit">Log In</button>
      </form>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign up
      </button>
    </>
  );
};

export default LoginPage;
