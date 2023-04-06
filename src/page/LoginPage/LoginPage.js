import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [loginInfo, SetLoginInfo] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const LoginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/login", loginInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={LoginHandler}>
        <h2>Log In</h2>
        <label>Eamil</label>
        <input
          name="email"
          value={loginInfo.email}
          onChange={onChangeHandler}
        ></input>
        <label>Password</label>
        <input
          name="password"
          value={loginInfo.password}
          onChange={onChangeHandler}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginPage;
